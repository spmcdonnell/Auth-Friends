import React, { useState, useEffect } from 'react';
import axios from 'axios';

import axiosWithAuth from '../../helpers/axiosWithAuth';
import Friend from '../Friend/Friend';

function FriendsList() {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        axiosWithAuth()
            .get('http://localhost:5000/api/friends')
            .then(res => {
                console.log(res);
                setFriends(res.data);
            })
            .catch(err => {
                console.log(err.response);
            });
    }, []);

    return (
        <div>
            {friends.map(friend => {
                return <Friend key={friend.id} {...friend} />;
            })}
        </div>
    );
}

export default FriendsList;
