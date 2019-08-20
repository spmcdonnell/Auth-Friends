import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import LoginForm from './components/LoginForm/LoginForm';
import FriendsList from './components/FriendsList/FriendsList';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <ul>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/friends">Friends</Link>
                    </li>
                </ul>
                <Route exact path="/login" component={LoginForm} />
                <PrivateRoute path="/friends" component={FriendsList} />
            </div>
        </Router>
    );
}

export default App;
