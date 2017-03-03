import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
var expect = require('expect');

var actions = require('actions');

var createMockStore = configureMockStore([thunk]);

describe('Actions', () => {
  it('should generate search text action', () => {
    var action = {
      type: 'SET_SEARCH_TEXT',
      searchText: 'Some search text'
    }
    var res = actions.setSearchText(action.searchText);

    expect(res).toEqual(action);
  });

  it('should generate add todo action', () => {
    var action = {
      type: 'ADD_TODO',
      todo: {
        id: '62dsfy3q4',
        text: 'Get something to eat',
        completed: false,
        createdAt: 52345
      }
    }
    var res = actions.addTodo(action.todo);

    expect(res).toEqual(action);
  });

  it('should create todo and dispatch ADD_TODO', (done) => {
    const store = createMockStore({});
    const todoText = 'My todo item';

    store.dispatch(actions.startAddTodo(todoText)).then(() => {
      const actions = store.getActions();
      expect(actions[0]).toInclude({
        type: 'ADD_TODO'
      });
      expect(actions[0].todo).toInclude({
        text: todoText
      });
      done();
    }).catch(done);
  });

  it('should generate add todos action object', () => {
    var todos = [{
      id: 111,
      text: 'something',
      completed: false,
      createdAt: 33000,
      completedAt: undefined
    }]
    var action = {
      type: 'ADD_TODOS',
      todos
    }
    var res = actions.addTodos(todos);

    expect(res).toEqual(action);
  });

  it('should generate add toggle showCompleted action', () => {
    var action = {
      type: 'TOGGLE_SHOW_COMPLETED'
    }
    var res = actions.toggleShowCompleted();

    expect(res).toEqual(action);
  });

  it('should generate add toggle todo action', () => {
    var action = {
      type: 'TOGGLE_TODO',
      id: '4'
    }
    var res = actions.toggleTodo(action.id);

    expect(res).toEqual(action);
  });
});
