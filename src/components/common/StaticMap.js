import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withRouter } from 'react-router-dom';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

class StaticMap extends Component {
    constructor(props) {
        super(props);

        this.state = {
            stores: [
            { latitude: 18.5204, longitude: 73.8567 },
            { latitude: 8.4657, longitude: -13.2317 },
            { latitude: 38.9072, longitude: -77.0369 },
            { latitude: 6.3156, longitude: 10.8074 },
            { latitude: 4.4419, longitude: 15.2663 }]
        }
    }

    displayMarkers = () => {
        return this.state.stores.map((store, index) => {
            return <Marker key={index} id={index} position={{
                lat: store.latitude,
                lng: store.longitude
            }}
                onClick={() => console.log("You clicked me!")} />
        })
    }

    render() {
        return (
            <Map className='mapView'
                google={this.props.google}
                zoom={2}
                style={mapStyles}
                initialCenter={{ lat: 18.5204, lng: 73.8567 }}
            >
                {this.displayMarkers()}
            </Map>
        );
    }
}

const mapStyles = {
    width: '100%',
    height: 550,
};

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBIR6KYwHzXNFR-0ighiJDR5t2G4MrcaEg'
})(StaticMap);

// export default withRouter(StaticMap);
