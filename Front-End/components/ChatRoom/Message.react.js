var React = require('react');

var Message = React.createClass({
    render: function() {


        return (
            <div className="col-xs-12 phn">
                <div className="col-xs-3 pvl">
                    {this.props.user}
                </div>
                <div className="col-xs-9 pvl">
                    {this.props.content}
                </div>
            </div>
        );
    }
});

module.exports = Message;
