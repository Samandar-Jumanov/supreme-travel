"use client";

import { GoogleMap, LoadScript, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';
import { useState } from 'react';
const DirectionsMap = ({ apiKey, origin, destination }) => {
  const [response, setResponse] = useState(null);

  const directionsCallback = (res) => {
    if (res !== null) {
      setResponse(res);
    }
  };

  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap
        mapContainerStyle={{ height: '400px', width: '100%' }}
        center={origin}
        zoom={8}
      >
        <DirectionsService
          options={{ destination, origin, travelMode: 'DRIVING' }}
          callback={directionsCallback}
        />
        {response && <DirectionsRenderer directions={response} />}
      </GoogleMap>
    </LoadScript>
  );
};

export default DirectionsMap;