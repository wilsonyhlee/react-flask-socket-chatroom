var React = require('react');

var MessageList = require("./MessageList.react");
var Input = require("./Input.react");

var ChatRoom = React.createClass({
    render: function() {

        var name = this.props.name;

        return (
            <div className="col-xs-8 vh-100 br-dark bal phn">
                <div className="bg-dark font-light pal text-center">Chat Room #{name}</div>
                <div className="bg-light">
                    <MessageList messageList={this.props.messageList}/>
                    <Input submitMessage={this.props.submitMessage}/>
                </div>
            </div>
        )
    }
});

module.exports = ChatRoom;
