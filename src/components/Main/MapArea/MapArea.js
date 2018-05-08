import React, { Component } from 'react';
import { Gmaps, Marker, InfoWindow } from 'react-gmaps';
import classes from './MapArea.css';

class MapArea extends Component {
    constructor(props) {
        super(props);
        this.state = {
            coordinates: [],
        }
    }

    onMapCreated = (map) => {
        map.setOptions({ disableDefaultUI: true });
    }

    renderInfoWindows = () => {
        return this.props.spots.map((location, i) => {
            if (!this.props.infoWindows[i]) return null;
            if (!location.coordinates) return null;
            return (
            <InfoWindow
                key={i}
                lat={location.coordinates.latitude}
                lng={location.coordinates.longitude}
                content={`<h4>${location.name} (close for more info)</h4>`}
                onCloseClick={() => this.props.toggleModal(i)}>
            </InfoWindow>
            );
        });
    }

    toggleMap = () => {
        this.setState({ showMap: !this.state.showMap });
    }

    mapResizeHandler = () => {
        this.windowWidth = window.innerWidth;
        this.windowHeight = window.innerHeight;
        this.props.toggleMap();
        this.props.toggleMap();
    }

    componentWillMount = () => {
        window.addEventListener("resize", () => {
            setTimeout(() => { this.mapResizeHandler() }, 1000);
        });
    }

    windowWidth = window.innerWidth;
    windowHeight = window.innerHeight;

    render() {
        return (
            <div className={classes.Map}>
                { this.props.showMap && <Gmaps 
                    width={this.windowWidth}
                    height={this.windowHeight * .5} 
                    lat={this.props.mapFocus.lat}
                    lng={this.props.mapFocus.long} 
                    zoom={15}
                    onMapCreated={this.onMapCreated} >
                <InfoWindow 
                    lat={this.props.location.lat}
                    lng={this.props.location.long}
                    content={'You are here!'} />
                { this.props.spots.map((spot, i) => {
                    if (!spot.coordinates) return null;
                     return (
                        <Marker 
                            key={`marker-${i}`}
                            lat={spot.coordinates.latitude}
                            lng={spot.coordinates.longitude}
                            onClick={() => this.toggleInfoWindow(i)} />
                        );
                    })} 
                    {this.renderInfoWindows()}
                </Gmaps> }
            </div>
        );
    }
}

export default MapArea;