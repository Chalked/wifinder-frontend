import React from 'react';
import UserComment from './UserComment/UserComment';
import CommentForm from './CommentForm/CommentForm';
import classes from './Modal.css';
import { bounceInUp } from 'react-animations';
import Radium, { StyleRoot } from 'radium';

const styles = {
    bounceInUp: {
        animation: 'x 1s',
        animationName: Radium.keyframes(bounceInUp, 'bounceInUp')
    }
}

const Modal = (props) => {
    const commentList = props.comments.map((comment, i) => {
        if (comment.location_id === props.place.id) {
        return <UserComment 
            key={comment.id} 
            id={comment.id}
            title={comment.title}
            body={comment.body}
            postDate={comment.posted_at}
            delete={props.delete} />
        } else return null;
    });

    return (
        <StyleRoot >
            <div className={classes.Modal}>
                <div className={classes.OuterWrapper}>
                    <div className={classes.InnerWrapper} style={styles.bounceInUp}>
                        <div className={classes.Place}>
                            <small className={classes.Close} onClick={() => props.toggle()}>close</small>
                            <small onClick={() => props.delete(props.place.id, 'locations/')}
                            className={classes.Delete}>delete</small>
                            <h2>{props.place.name}</h2><small className={classes.Distance}>{props.place.distance}</small>
                            <p className={classes.P}>{props.place.address}</p>
                            <p className={classes.P}>{props.place.description}</p>
                        </div>
                        <div className={classes.InnerModal}>
                            {commentList}
                            <CommentForm 
                                toggle={props.toggle}
                                currentLocation={props.place.id}
                                post={props.post} />
                        </div>
                    </div>
                </div>
            </div>
        </StyleRoot>
    );
}

export default Modal;