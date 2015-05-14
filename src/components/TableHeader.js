var React = require('react');
var ReactPropTypes = React.PropTypes;


var TableHeader = React.createClass({
  propTypes: {
    headers: ReactPropTypes.array.isRequired,
    sort: ReactPropTypes.func
  },
  _sort: function(category){
    this.props.sort(category);
  },
  render: function(){
    var element = this;
    var headers = this.props.headers.map(function(header){
      return (
        <th className="header-cell">
            {header}
        </th>
      );
    });
    return (
      <thead className="header">
        <tr className="header-row">
          {headers}
        </tr>
      </thead>
    );
  }
});

module.exports = TableHeader;