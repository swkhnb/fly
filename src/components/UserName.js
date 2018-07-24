import React from 'react';

const UserName = (props) => {
    return <div className="badge badge-primary">{`${props.first_name} ${props.last_name}`}</div>;
}

export default UserName;
