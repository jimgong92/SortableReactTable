var React = require('react');
var ReactPropTypes = React.PropTypes;
var utils = require('../utils/utils');

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
    if (this.state.orderedBy !== category) {
      console.log(this.state.data);
      var sorted = utils.sortByCategory(utils.copy(this.state.data), category);
      this.setState({
        data: sorted,
        orderedBy: category
      });
    }
  },
  render: function(){
    console.log(this.state.data);
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
function copy(arr){
  var copiedArr = [];
  for(var i = 0; i < arr.length; i++){
    copiedArr.push(arr[i]);
  }
  return copiedArr;
}
module.exports = Table;