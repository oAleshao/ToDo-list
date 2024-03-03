import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const User = () => {

    const { id } = useParams();
    const [user, setUser] = useState({});
    const [statePromise, setStatePromise] = useState('idle');
    const navigate = useNavigate();

    useEffect(() => {
        getUser();
    }, [id]);

    const getUser = async () => {
        try {
            setStatePromise('pending');
            const response = await axios('https://jsonplaceholder.typicode.com/users/' + id);
            setStatePromise('fullfilled');
            setUser(response.data);
        } catch (ex) {
            console.log(ex);
            setStatePromise('rejected');
        }
    }

    if (statePromise === 'pending' || statePromise === 'idle') {
        return 'Loading....'
    }
    if (statePromise === 'rejected') {
        return 'Not user found';
    }

    return (
        <div>
            <h1>{user?.name}</h1>
            <div>{user?.email}</div>
            <div>{user?.company.name}</div>
        </div>
    );
}

export default User;
