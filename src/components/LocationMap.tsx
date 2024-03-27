import React, {useState} from "react";
import {GoogleMap, LoadScript, Marker} from "@react-google-maps/api";

interface Location {
    latitude: number;
  longitude: number;
}

interface LocationMapProps {
    location: Location;
}

const LocationMap: React.FC<LocationMapProps> = ({ location }) => {
    const [map, setMap] = useState<any>(null);
    const mapStyles = { height: '400px', width: '100%' };
    const defaultCenter = {
      lat: location.latitude,
      lng: location.longitude
    };
  
    return (
      <LoadScript googleMapsApiKey="AIzaSyAs5Fol5dXtKiuvm-YPdOmLDoJnQJJZnLs"> {/* Replace 'YOUR_API_KEY' with your actual Google Maps API key */}
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={10}
          center={defaultCenter}
          onLoad={map => setMap(map)}
        >
          <Marker position={defaultCenter} />
        </GoogleMap>
      </LoadScript>
    );
  };
  
  export default LocationMap;