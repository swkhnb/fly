import React from 'react';
import UserName from './UserName';
import UserInfo from './UserInfo';
import ApiService from '../ApiService';
import { Link } from 'react-router-dom';
import { ListGroup } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

class UserItem extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            todos: []
        };
    }

    async componentDidMount() {
        const userId = parseInt(this.props.id, 10);
        try {
            const todos = await ApiService.getTodos({userId});
            this.setState({todos});
        } catch (e) {
            console.error(`An error ${e.message} occured while loading tasks for user ${userId}`);
        }
    }

    render() {
        return (
            <li className="list-group-item">
                <div className="card">
                    <UserName first_name={this.props.first_name} last_name={this.props.last_name} />
                    <UserInfo {...this.props} />
                    <Link className='navbar navbar-light bg-light' to={`/todos/${this.props.id}`}>View Todos ({this.props.todo_count})</Link>
                </div>
            </li>
        );
    }

};

export default UserItem;
