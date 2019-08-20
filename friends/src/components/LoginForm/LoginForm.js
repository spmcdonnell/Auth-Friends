import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

function LoginForm(props) {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    function handleChange(e) {
        if (e.target.name === 'username') {
            setUserName(e.target.value);
        } else {
            setPassword(e.target.value);
        }
    }

    function userLogin(e) {
        e.preventDefault();

        axios
            .post('http://localhost:5000/api/login', { username: userName, password: password })
            .then(res => {
                console.log(res);
                localStorage.setItem('token', res.data.payload);
            })
            .then(() => {
                props.history.push('/friends');
            })
            .catch(err => {
                console.log(err.response);
            });
    }

    return (
        <div className="login-form">
            <form onSubmit={userLogin}>
                <input type="text" name="username" value={userName} onChange={handleChange} />
                <input type="password" name="password" value={password} onChange={handleChange} />
                <button>Submit</button>
            </form>
        </div>
    );
}

export default LoginForm;
