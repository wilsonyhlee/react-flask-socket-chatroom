var React = require('react');

var Message = React.createClass({
    render: function() {


        return (
            <div className="col-xs-12 phn">
                <div className="col-xs-2 pvl font-dark">
                    <b>{this.props.user}</b>
                </div>
                <div className="col-xs-8 pvl" dangerouslySetInnerHTML={{__html: this.props.message}}>
                </div>
                <div className="col-xs-2 pvl font-dark">
                    <b>{this._buildTime(this.props.timestamp)}</b>
                </div>
            </div>
        );
    },
    _buildTime(date) {
        if(date) {
            date = new Date(date);
            return date.getMonth()+"/"+date.getDate()+"/"+date.getFullYear()+" "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds()
        } else {
            return "";
        }
    }
});

module.exports = Message;
