var React = require('react');
var ReactPropTypes = React.PropTypes;

var TableBody = React.createClass({
  propTypes: {
    data: ReactPropTypes.array.isRequired,
    categories: ReactPropTypes.array
  },
  render: function(){
    var element = this;
    var rows = element.props.data.map(function(row){
      var cells = element.props.categories.map(function(category){
        return (
          <td
            className='cell'
            data={row[category]} >
              {row[category]}
          </td>
        );
      });
      return (<tr className='table-row'>{cells}</tr>);
    });

    return (
      <tbody className='table-body'>
        {rows}
      </tbody>
    );
  }
});

module.exports = TableBody;