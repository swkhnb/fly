import React from 'react';
import UserItem from './UserItem';
import { ListGroup } from 'react-bootstrap';

const UserList = (props) => {
    const users = props.users;
    if (!users.length) { //no users
        return <p>Search result is currently empty</p>;
    }
    return <ul className="list-group">
            {
                users.map((item, index) => {
                    return <UserItem key={index} {...item} />;
                })
            }
    </ul>;
}

export default UserList;