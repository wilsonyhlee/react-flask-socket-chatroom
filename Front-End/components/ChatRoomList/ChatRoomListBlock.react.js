var React = require('react');

var ChatRoomListBlock = React.createClass({
    render: function() {
        var className = "col-xs-12 pal chatRoomListBlock";
        className += this.props.selected ? " selected" : "";

        var fill = this.props.active ? "green" : "grey";

        return (
            <div className={className} onClick={this._onSelect}>
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="10px" height="10px">
                    <circle cx="5" cy="5" r="5" stroke="#333" stroke-width="1" fill={fill}/>
                </svg>
                <span className="mll">Chat Room #{this.props.name} (Unread: {this.props.unread})</span>
            </div>
        );
    },
    _onSelect: function() {
        this.props.onSelect(this.props.ind);
    }
});

module.exports = ChatRoomListBlock;