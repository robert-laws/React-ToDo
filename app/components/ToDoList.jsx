var React = require('react');
var Todo = require('Todo');

var TodoList = React.createClass({
  render: function() {
    var {todos} = this.props;

    var renderTodos = () => {
      var number = 0;
      return todos.map((todo) => {
        return(
          <Todo key={todo.id} {...todo} onToggle={this.props.onToggle} />
        )
      });
    }
    return (
      <div className="row">
        {renderTodos()}
      </div>
    )
  }
});

module.exports = TodoList;
