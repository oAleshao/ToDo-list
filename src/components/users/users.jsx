import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Users = () => {

    const [listUsers, setListUsers] = useState([]);

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = async () => {
        const response = await axios('https://jsonplaceholder.typicode.com/users');
        setListUsers(response.data);
    }

    return (
        <div>
            <h1>Users</h1>
            {listUsers.map(user => <div key={user.id}><NavLink to={`/users/${user.id}`}>{user.name}</NavLink></div>)}
            <Outlet />
        </div>
    );
}

export default Users;
