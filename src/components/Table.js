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
    console.log(category);
  },
  render: function(){
    var headers = Object.keys(this.state.data[0]);
    return (
      <table className="sortable-table">
        <TableHeader 
          headers={headers} 
          sort={this.sortByColumn} />
        <TableBody 
          data={this.state.data} 
          categories={headers} />
      </table>
    );
  }
});

module.exports = Table;