var React = require('react');
var ReactPropTypes = React.PropTypes;

/**
 * Component Dependencies
 */
var TableHeader = require('./TableHeader');
var TableBody = require('./TableBody');

var Table = React.createClass({
  propTypes: {
    data: ReactPropTypes.array.isRequired
  },
  getInitialState: function(){
    return {
      data: this.props.data,
      orderedBy: null
    };
  },
  sortByColumn: function(category){
    
  },
  render: function(){
    return (
      <table className="sortable-table">
        <TableHeader />
        <TableBody />
      </table>
    );
  }
});

module.exports = Table;