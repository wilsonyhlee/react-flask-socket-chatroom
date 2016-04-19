var React = require('react');

var Input = React.createClass({
    getInitialState: function() {
        return {text: ""};
    },
    render: function() {
        return (
            <div className="col-xs-12 phn">
                <textarea className="form-control" onChange={this._textChange}></textarea>
                <div className="col-xs-12 phn">
                    <button type="button" className="btn btn-primary pull-right" onClick={this._sendMessage}>Send</button>
                </div>
            </div>
        );
    },
    _sendMessage: function() {

    },
    _textChange: function(e) {
        this.setState({text: e.target.value});
    }
});

module.exports = Input;
