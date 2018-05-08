import React from 'react';
import classes from './ListArea.css';
import { flipInX } from 'react-animations';
import Radium, { StyleRoot } from 'radium';

const styles = {
    flipInX: {
        animation: 'x 1s',
        animationName: Radium.keyframes(flipInX, 'flipInX')
    }
}

const ListArea = (props) => {
    const list = props.spots.map((place, i) => {
        return <li 
                style={styles.flipInX}
                key={place.id} 
                onClick={() => { props.recenterMap(i); props.toggleInfoWindow(i); }}
                className={classes.ListItem} >
                    <p className={classes.Name}>{place.name}</p>
                    <small className={classes.Distance}>{place.distance}</small>
                    <p className={classes.Address}>{place.address}</p>
                </li>
    });

    return (
        <StyleRoot >
        <div className={classes.ListArea}>
            <ul>{list}</ul>
        </div>
        </StyleRoot>
    );
}

export default ListArea;