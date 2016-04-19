'use strict';

var React = require('react');
var socket = io.connect();

var ChatRoom = require("./ChatRoom/ChatRoom.react");

var App = React.createClass({
	render: function() {
		return (
			<div>
				<ChatRoom />
			</div>
		);
	}
});

React.render(<App />, document.getElementById('app'));