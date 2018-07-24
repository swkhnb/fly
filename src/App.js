import React from 'react';
import './styles/style.css';
import UserSearchContainer from './containers/UserSearchContainer';
import UserListContainer from './containers/UserListContainer';
import TodoListContainer from './containers/TodoListContainer';
import { Route, Switch } from 'react-router-dom';

const App = () => {
    return <Switch>
        <Route exact path='/' component={UserListContainer}/>
        <Route exact path='/search' component={UserSearchContainer}/>
        <Route path='/todos/:userId' component={TodoListContainer}/>
    </Switch>
};

export default App;
