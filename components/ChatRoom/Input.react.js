var React = require('react');
import EmojiReact from '../reusable/EmojiPicker.react';
import getEmoji from 'get-emoji';
import EditableDiv from "../reusable/EditableDiv.react";

var Input = React.createClass({
    getInitialState: function() {
        return {html: "", textIndex: 0, emojis: []};
    },
    render: function() {
        return (
            <div className="col-xs-12 pal input-block">
                <EditableDiv textIndex={this.state.textIndex} html={this.state.html} onChange={this._textChange} />
                <div className="pull-right">
                    <button type="button" className="btn btn-primary "
                            onClick={() => this._submitMessage()}>
                        Send
                    </button>
                </div>
                <EmojiReact
                    reactions={this.state.emojis}
                    onReaction={(name) => this.onReaction(name)}
                    onEmojiClick={(name) => this.onEmojiClick(name)}
                    />
            </div>
        );
    },
    onReaction: function(name) {
    },
    onEmojiClick: function(name) {
        var newHtml = this.state.html + "<img style='width: 16px, height: 16px' src='" + getEmoji(name) + "' />";
        this.setState({html: newHtml});
    },
    _submitMessage: function() {
        var html = this.state.html;
        this.setState({html: "", textIndex: this.state.textIndex+1}, this.props.submitMessage(html));
    },
    _textChange: function(e) {
        this.setState({html: e.target.value});
    }
});

module.exports = Input;
