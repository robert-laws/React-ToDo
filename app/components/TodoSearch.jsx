var React = require('react');

var TodoSearch = React.createClass({
  handleSearch: function() {
    var showCompleted = this.refs.showCompleted.checked;
    var searchText = this.refs.searchText.value;

    this.props.onSearch(showCompleted, searchText);
  },
  render: function() {
    return (
      <div className="row">
        <div>
          <input type="search" ref="searchText" placeholder="Enter a Search Term" onChange={this.handleSearch} />
        </div>
        <div>
          <fieldset>
            <label><input type="checkbox" ref="showCompleted" onChange={this.handleSearch} /> Show Completed Todos</label>
          </fieldset>
        </div>
      </div>
    )
  }
});

module.exports = TodoSearch;
