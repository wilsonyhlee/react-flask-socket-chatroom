var React = require('react');

var MessageList = require("./MessageList.react");
var Input = require("./Input.react");

var ChatRoom = React.createClass({
    getInitialState() {
        return {users: [], messages:[{user: "Wilson", content:"hi"}, {user: "Neil", content:"hey"}], text: ''};
    },
    render: function() {

        var index = this.props.index;

        return (
            <div className="col-xs-3 height-100 br-dark bal phn">
                <div className="bg-dark font-light pal text-center">Chat Room #{index}</div>
                <div className="bg-light">
                    <MessageList messageList={this.state.messages}/>
                    <Input />
                </div>
            </div>
        )
    }
});

module.exports = ChatRoom;
