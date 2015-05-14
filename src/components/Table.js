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
    if (this.state.orderedBy !== category) {
      var data = copy(this.state.data);
      var len = data.length;

      for (var i = 0; i < len - 1; i++){
        for (var j = i + 1; j < len; j++){
          if (data[i][category] > data[j][category]){
            var temp = data[i];
            data[i] = data[j];
            data[j] = temp;
          }
        }
      }
      this.setState({
        data: data,
        orderedBy: category
      });
    }
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
function copy(arr){
  var copiedArr = [];
  for(var i = 0; i < arr.length; i++){
    copiedArr.push(arr[i]);
  }
  return copiedArr;
}
module.exports = Table;