var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');

var TodoApp = React.createClass({
  getInitialState: function() {
    return {
      showCompleted: false,
      searchText: '',
      todos: [
        {
          id: 1,
          text: 'get groceries'
        },
        {
          id: 2,
          text: 'take out trash'
        },
        {
          id: 3,
          text: 'answer the phone'
        },
        {
          id: 4,
          text: 'help with the work'
        }
      ]
    };
  },
  handleAddTodo: function(text) {
    alert('new todo: ' + text)
  },
  handleTodoSearch: function(showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    })
  },
  render: function () {
    var {todos} = this.state;

    return (
      <div>
        <TodoSearch onSearch={this.handleTodoSearch} />
        <TodoList todos={todos} />
        <AddTodo onAddTodo={this.handleAddTodo} />
      </div>
    )
  }
});

module.exports = TodoApp;
