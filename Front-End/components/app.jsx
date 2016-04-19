'use strict';

var React = require('react');

var socket = io.connect();

var App = React.createClass({
	render: function() {
		return (
			<div>
			</div>
		);
	}
});

React.render(<App />, document.getElementById('app'));