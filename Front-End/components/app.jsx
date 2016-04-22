'use strict';

var React = require('react');
var ReactDom = require("react-dom");
var socket = io.connect();

var NameForm = require("./NameForm/NameForm.react");
var ChatRoom = require("./ChatRoom/ChatRoom.react");
var ChatRoomList = require("./ChatRoomList/ChatRoomList.react");

var App = React.createClass({
	getInitialState: function() {
		return {
			messageList: [[], [], [], []],
            messageUnread: [0, 0, 0, 0],
			users: [],
            chatRoomList: [],
            user: "",
            selectedRoom: 0,
            nameSet: false
		}
	},
	componentDidMount: function() {
        socket.on('init', this._initialise);
		socket.on("received:message", this._receiveMessage);
        socket.on('change:name', this._userNameChanged);
        socket.on('user:join', this._userJoined);
        socket.on('user:left', this._userLeft);
	},
    _initialise: function(data) {
        this.setState({users: data.users, user: data.name, chatRoomList: data.chatRoomList});
    },
    _userNameChanged(data) {
        var {oldName, newName} = data;
        var {users} = this.state;
        var index = users.indexOf(oldName);
        users.splice(index, 1, newName);
        this.setState({users});
    },
    _receiveMessage: function(data) {
		this._addMessageToState(data);
	},
	_submitMessage: function(message) {
        this._addMessageToState({message: message, user: this.state.user, timestamp: new Date()});
		socket.emit("send:message", {message: message, timestamp: new Date()});
	},
	_addMessageToState: function(data) {
		var messageList = this.state.messageList;
        var roomId = 0; // ad hoc: always set to 0 to simplify the use case
		messageList[roomId].push({message: data.message, user: data.user, timestamp: data.timestamp});
        if(this.state.selectedRoom !== roomId) {
            var messageUnread = this.state.messageUnread;
            messageUnread[roomId] += 1;
            this.setState({messageUnread: messageUnread});
        }
		this.setState({messageList: messageList});
	},
    _selectRoom: function(index) {
        var messageUnread = this.state.messageUnread;
        messageUnread[index] = 0;
        this.setState({selectedRoom: index, messageUnread: messageUnread});
    },
    _userJoined: function(data) {
        var {users} = this.state;
        users.push(data.name);
        this.setState({users});
    },
    _userLeft: function(data) {
        var {users} = this.state;
        var index = users.indexOf(data.name);
        users.splice(index, 1);
        this.setState({users});
    },
    _handleChangeName: function(newName) {
        var oldName = this.state.user;
        socket.emit('change:name', { name : newName}, (result) => {
            if(!result) {
                return alert('There was an error setting your name');
            }
            var {users} = this.state;
            var index = users.indexOf(oldName);
            users.splice(index, 1, newName);
            this.setState({users, user: newName, nameSet: true});
        });
    },
	render: function() {
        var chatRoomList = this.state.chatRoomList;
        var selectedRoom = this.state.selectedRoom;
        var name = chatRoomList.length > 0 ? chatRoomList[selectedRoom].index : "";

        var displayChatRoom = this.state.nameSet ? "block" : "none";
        var displayNameForm = this.state.nameSet ? "none" : "block";

		return (
            <div>
                <div style={{display: displayNameForm}}>
                    <NameForm setDisplayName={this._handleChangeName}/>
                </div>
                <div style={{display: displayChatRoom}}>
                    <ChatRoomList list={chatRoomList}
                                  messageUnread={this.state.messageUnread}
                                  selected={selectedRoom}
                                  onSelect={this._selectRoom}/>
                    <ChatRoom name={name}
                              user={this.state.user}
                              submitMessage={this._submitMessage}
                              messageList={this.state.messageList[selectedRoom]}/>
                </div>
            </div>
		);
	}
});

ReactDom.render(<App />, document.getElementById('app'));