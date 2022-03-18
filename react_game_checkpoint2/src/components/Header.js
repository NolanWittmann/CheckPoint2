import React from 'react';

const Header = (props) => {
    return (
        <div>
            <h1>Welcome to {props.name}</h1>
        </div>
    );
};

export default Header;