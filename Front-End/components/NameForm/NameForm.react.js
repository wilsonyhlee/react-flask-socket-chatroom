var React = require('react');

var NameForm = React.createClass({
   getInitialState: function() {
       return {text: ""};
   },
   render: function() {
       return (
           <div className="col-xs-4 col-xs-offset-4 vh-100 br-dark bal phn">
               <div className="bg-dark font-light pal text-center">Set Your Display Name</div>
               <div className="pal">
                   <input className="form-control"
                          type="text"
                          onChange={this._onChange}
                          value={this.state.text}
                          placeholder="Your Display Name"/>
               </div>
               <div className="text-center">
                   <button className="btn btn-primary" type="submit" onClick={this._changeName}>Submit</button>
               </div>

           </div>
       );
   },
   _onChange: function(e) {
       this.setState({text: e.target.value});
   },
   _changeName: function() {
       this.props.setDisplayName(this.state.text);
   }
});

module.exports = NameForm;