var React = require('react');
var ReactDom = require("react-dom");

var EditableDiv = React.createClass({
    render: function(){
        return (
            <div
                key={this.props.textIndex}
                className="editableDiv"
                onInput={this.emitChange}
                onBlur={this.emitChange}
                contentEditable
                dangerouslySetInnerHTML={{__html: this.props.html}}>
            </div>
        );
    },
    shouldComponentUpdate: function(nextProps){
        return nextProps.html !== ReactDom.findDOMNode(this).innerHTML;
    },
    emitChange: function(){
        var html = ReactDom.findDOMNode(this).innerHTML;
        if (this.props.onChange && html !== this.lastHtml) {

            this.props.onChange({
                target: {
                    value: html
                }
            });
        }
        this.lastHtml = html;
    }
});

module.exports = EditableDiv;
