"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TodoReducer = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var TodoReducer = function TodoReducer(state, action) {
  switch (action.type) {
    case 'GET_TODO_SUCCEED':
      return _objectSpread({}, state, {
        todos: action.payload
      });

    case 'GET_TODO_FAILED':
      return _objectSpread({}, state, {
        hasError: true,
        message: action.payload
      });

    case 'DO_TODO':
      return _objectSpread({}, state, {
        todos: state.todos.map(function (todo) {
          if (todo.id === action.payload) {
            return _objectSpread({}, todo, {
              isCompleted: true
            });
          } else {
            return todo;
          }
        })
      });

    case 'UNDO_TODO':
      return _objectSpread({}, state, {
        todos: state.todos.map(function (todo) {
          if (todo.id === action.payload) {
            return _objectSpread({}, todo, {
              isCompleted: false
            });
          } else {
            return todo;
          }
        })
      });

    case 'ADD_TODO':
      return _objectSpread({}, state, {
        todos: [action.payload].concat(_toConsumableArray(state.todos))
      });

    case 'DELETE_TODO':
      return _objectSpread({}, state, {
        todos: state.todos.filter(function (todo) {
          return action.payload !== todo.id;
        })
      });

    case 'DELETE_ALL_TODO':
      return _objectSpread({}, state, {
        todos: []
      });

    case 'DELETE_COMPLETED_TODO':
      return _objectSpread({}, state, {
        todos: state.todos.filter(function (todo) {
          return !todo.isCompleted;
        })
      });

    default:
      return state;
  }
};

exports.TodoReducer = TodoReducer;