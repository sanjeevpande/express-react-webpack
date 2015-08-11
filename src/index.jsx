// 'use strict';

// var React = require( 'react' );
// var Trump = require( './Trump' );

// React.render( <Trump />, document.getElementById( 'content' ) );


var React         = require('react');
var TestComponent = require('./components/TestComponent.jsx');

React.render(
  <TestComponent/>,
  document.getElementById("react-container")
);