import React from 'react';
import classes from './UserComment.css';

const UserComment = (props) => (
    <div className={classes.UserComment}>
        <small onClick={() => props.delete(props.id, 'comments/')}
        className={classes.Delete}>delete</small>
        <h3>{props.title}</h3>
        <small className={classes.Small}>{props.postDate}</small>
        <p className={classes.Small}>{props.body}</p>
    </div>
);

export default UserComment;