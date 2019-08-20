import React from 'react';

function Friend({ name, age, email }) {
    return (
        <div className="friend">
            <h3>{name}</h3>
            <p>Age: {age}</p>
            <p>Email: {email}</p>
        </div>
    );
}

export default Friend;
