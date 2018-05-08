import React from 'react';
import classes from './Header.css';

const Header = (props) => (
    <header className={classes.Header}>
        <h1><span className={classes.Wi}>Wi</span><span className={classes.Finder}>Finder</span></h1>
        <div className={classes.Add}>
            <small id='add' onClick={() => props.toggle()}>add+</small>
        </div>
    </header>
);

export default Header;