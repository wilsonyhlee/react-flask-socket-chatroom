var React = require('react');

var ChatRoomListBlock = require("./ChatRoomListBlock.react");

var ChatRoomList = React.createClass({
    render: function() {
        var blocks = this.props.list.map(function(c, i) {
            var selected = i === this.props.selected;
            return (
                <ChatRoomListBlock
                    key={i}
                    ind={i}
                    name={c.index}
                    unread={this.props.messageUnread[i]}
                    active={c.active}
                    selected={selected}
                    onSelect={this.props.onSelect}/>
            )
        }.bind(this));

        return (
            <div className="col-xs-3 vh-100 br-dark bal phn">
                {blocks}
            </div>
        );
    }
});

module.exports = ChatRoomList;