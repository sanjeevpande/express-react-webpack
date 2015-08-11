var React = require('react');

var index = React.createClass({
  render: function() {
    return (
    	<div>
    		<div id='react-container'></div>
    		<script src='/build/common.js'></script>
    		<script src='/build/main.js'></script>
    	</div>
    );
  }
});

module.exports = index;