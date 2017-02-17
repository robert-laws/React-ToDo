var React = require('react');
var TodoList = require('TodoList');

var TodoApp = React.createClass({
  getInitialState: function() {
    return {
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
  render: function () {
    var {todos} = this.state;

    return (
      <div>
        <TodoList todos={todos} />
      </div>
    )
  }
});

module.exports = TodoApp;
