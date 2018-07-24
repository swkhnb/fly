import React from 'react';
import UserName from './UserName';
import UserInfo from './UserInfo';
import { Link } from 'react-router-dom';
import { ListGroup } from 'react-bootstrap';

const UserItem = (props) => {
    let first_name, last_name, id, todo_count, info;
    ({id, first_name, last_name, todo_count, ...info} = props);
    return (
        <li className="list-group-item">
            <div className="card">
                <UserName first_name={first_name} last_name={last_name} />
                <UserInfo {...info} />
                
                <Link className='navbar navbar-light bg-light' to={`/todos/${id}`}>View Todos ({todo_count})</Link>
            </div>
        </li>
    );

};

export default UserItem;
