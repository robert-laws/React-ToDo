var React = require('react');
var { connect } = require('react-redux');
var actions = require('actions');

export var AddTodo = React.createClass({
  onSumbit: function(e) {
    e.preventDefault();
    var { dispatch } = this.props;
    var text = this.refs.todoText.value;

    if(text.length > 0) {
      this.refs.todoText.value = '';
      dispatch(actions.startAddTodo(text));
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

export default connect()(AddTodo);
