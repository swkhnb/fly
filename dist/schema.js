'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _users = require('./data/users');

var _users2 = _interopRequireDefault(_users);

var _todos = require('./data/todos');

var _todos2 = _interopRequireDefault(_todos);

var _find = require('lodash/find');

var _find2 = _interopRequireDefault(_find);

var _filter = require('lodash/filter');

var _filter2 = _interopRequireDefault(_filter);

var _sumBy = require('lodash/sumBy');

var _sumBy2 = _interopRequireDefault(_sumBy);

var _graphql = require('graphql');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const UserType = new _graphql.GraphQLObjectType({
    name: 'User',
    description: 'Users in company',
    fields: () => ({
        id: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLInt) },
        first_name: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) },
        last_name: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) },
        email: { type: _graphql.GraphQLString },
        gender: { type: _graphql.GraphQLString },
        department: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) },
        country: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) },
        todo_count: {
            type: _graphql.GraphQLInt,
            resolve: user => {
                return (0, _sumBy2.default)(_todos2.default, todo => todo.userId === user.id ? 1 : 0);
            }
        },
        todos: {
            type: new _graphql.GraphQLList(TodoType),
            resolve: (user, args) => {
                return (0, _filter2.default)(_todos2.default, todo => todo.userId === user.id);
            }
        }
    })
});

const TodoType = new _graphql.GraphQLObjectType({
    name: 'Todo',
    description: 'Task for user',
    fields: () => ({
        id: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLInt) },
        title: { type: _graphql.GraphQLString },
        completed: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLBoolean) },
        user: {
            type: UserType,
            resolve: (todo, args) => {
                return (0, _find2.default)(_users2.default, user => user.id === todo.userId);
            }
        }
    })
});

const TodoQueryRootType = new _graphql.GraphQLObjectType({
    name: 'TodoAppSchema',
    description: 'Root Todo App Schema',
    fields: () => ({
        users: {
            args: {
                first_name: { type: _graphql.GraphQLString },
                last_name: { type: _graphql.GraphQLString },
                department: { type: _graphql.GraphQLString },
                country: { type: _graphql.GraphQLString }
            },
            type: new _graphql.GraphQLList(UserType),
            description: 'List of Users',
            resolve: (parent, args) => {
                if (Object.keys(args).length) {
                    return (0, _filter2.default)(_users2.default, args);
                }
                return _users2.default;
            }
        },
        todos: {
            args: {
                userId: { type: _graphql.GraphQLInt },
                completed: { type: _graphql.GraphQLBoolean }
            },
            type: new _graphql.GraphQLList(TodoType),
            description: 'List of Todos',
            resolve: (parent, args) => {
                if (Object.keys(args).length) {
                    return (0, _filter2.default)(_todos2.default, args);
                }
                return _todos2.default;
            }
        }
    })
});

const schema = new _graphql.GraphQLSchema({
    query: TodoQueryRootType
});

exports.default = schema;