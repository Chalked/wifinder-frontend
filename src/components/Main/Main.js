import React from 'react';
import MapArea from './MapArea/MapArea';
import ListArea from './ListArea/ListArea';
import classes from './Main.css';
import ReactLoading from 'react-loading';

const Main = (props) => {
    return (
        <main>
            <MapArea 
                showMap={props.showMap}
                toggleMap={props.toggleMap}
                infoWindows={props.infoWindows}
                location={props.location}
                spots={props.spots}
                mapFocus={props.mapFocus}
                toggleModal={props.toggleModal} />
            { props.loading && <ReactLoading 
                type='bars' 
                height={200} 
                width={200} 
                color='#162521'
            className={classes.Loading} /> }
            <ListArea 
                toggleInfoWindow={props.toggleInfoWindow}
                recenterMap={props.recenterMap}
                spots={props.spots}
                toggleForm={props.toggleForm} />
        </main>
    );
}

export default Main;