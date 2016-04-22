var React = require('react');

var Message = require("./Message.react");

var MessageList = React.createClass({
    render: function() {
        var messages = this.props.messageList.map(function(m, i) {
            return <Message key={i} user={m.user} message={m.message} timestamp={m.timestamp}/>
        });

        return (
            <div className="col-xs-12 phn">
                {messages}
            </div>
        );
    }
});

module.exports = MessageList;