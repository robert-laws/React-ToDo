var React = require('react');

var Todo = React.createClass({
  render: function() {
    var {id, text, completed} = this.props;
    return (
      <div onClick={() => {
          this.props.onToggle(id);
        }} className="callout small primary">
        <label><input type="checkbox" checked={completed} /> {text}</label>
      </div>
    )
  }
});

module.exports = Todo;
