import React from 'react';
import classes from './DeleteModal.css';

const DeleteModal = (props) => (
    <div className={classes.Modal}>
            <div className={classes.OuterWrapper}>
                <div className={classes.InnerWrapper}>
                    <p className={classes.Message}>Are you sure you want to delete?</p>
                    <p className={classes.Yes} onClick={() => props.confirm()}>yes</p>
                    <p className={classes.No} onClick={() => props.decline()}>no</p>
                </div>
            </div>
        </div>
);

export default DeleteModal;