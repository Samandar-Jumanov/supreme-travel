"use client";

import { GoogleMap, LoadScript, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';
import { useState } from 'react';
const DirectionsMap = ({ destination }) => {
  const [response, setResponse] = useState(null);

  const directionsCallback = (res) => {
    if (res !== null) {
      setResponse(res);
    }
  };

  const apiKey = process.env.GOOGLE_MAPS 
  const origin = { lat: 37.7749, lng: -122.4194 };

  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap
        mapContainerStyle={{ height: '400px', width: '100%' }}
        center={origin}
        zoom={8}
      >
        <DirectionsService
          options={{ destination, origin, }}
          callback={directionsCallback}
        />
        {response && <DirectionsRenderer directions={response} />}
      </GoogleMap>
    </LoadScript>
  );
};

export default DirectionsMap;