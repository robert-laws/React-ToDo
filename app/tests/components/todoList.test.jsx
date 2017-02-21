var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var { Provider } = require('react-redux');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

import { configure } from 'configureStore';
import ConnectedTodoList, {TodoList} from 'TodoList';
import ConnectedTodo, { Todo } from 'Todo';

describe('TodoList', () => {
  it('should exist', () => {
    expect(TodoList).toExist();
  });

  describe('TodoList Items', () => {
    it('should render one Todo component for each todo item', () => {
      var todos = [{
        id: 1,
        text: 'something happening',
        completed: false,
        createdAt: 500,
        completedAt: undefined
      },{
        id: 2,
        text: 'find some items',
        completed: false,
        createdAt: 500,
        completedAt: undefined
      }];
      var store = configure({
        todos
      });
      var provider = TestUtils.renderIntoDocument(
        <Provider store={store}>
          <ConnectedTodoList />
        </Provider>
      )
      var todoList = TestUtils.scryRenderedComponentsWithType(provider, ConnectedTodoList)[0]
      var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, ConnectedTodo);

      expect(todosComponents.length).toBe(todos.length);
    });

    it('should render empty message if no todos', () => {
      var todos = [];
      var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos} />);
      var $el = $(ReactDOM.findDOMNode(todoList));

      expect($el.find('.container__message').length).toBe(1);
    });
  });
});
