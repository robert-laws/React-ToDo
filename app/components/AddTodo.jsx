var React = require('react');

var AddTodo = React.createClass({
  onSumbit: function(e) {
    e.preventDefault();
    var todo = this.refs.todoText.value;
    if(todo.length > 0) {
      this.refs.todoText.value = '';
      this.props.onAddTodo(todo);
    } else {
      this.refs.todoText.focus();
    }
  },
  render: function() {
    return (
      <div className="container__footer">
        <form ref="form" onSubmit={this.onSumbit}>
          <input type="text" ref="todoText" placeholder="To do item?" />
          <button className="button expanded">Add To Do Item</button>
        </form>
      </div>
    )
  }
});

module.exports = AddTodo;
