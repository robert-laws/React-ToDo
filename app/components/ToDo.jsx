var React = require('react');

var Todo = React.createClass({
  render: function() {
    var {id, text} = this.props;
    return (
      <div className="small-6 medium-12 columns">
        <div className="callout small primary">
          {id}. {text}
        </div>
      </div>
    )
  }
});

module.exports = Todo;
