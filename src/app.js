var React = require('react');
var data = require('./data');
var Table = require('./components/Table');

React.render(<Table data={data}/>, document.getElementById('app'));