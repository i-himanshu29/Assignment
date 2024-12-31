import React from "react";
import useGeoLocation from "../Context/useGeoLocation";

const App = () => {
  const { location, error } = useGeoLocation();

  return (
    <div>
      <h1>Geolocation Example</h1>
      {error ? (
        <p>Error: {error}</p>
      ) : location.loaded ? (
        <p>
          Latitude: {location.coordinates.lat}, Longitude:{" "}
          {location.coordinates.lng}
        </p>
      ) : (
        <p>Loading location...</p>
      )}
    </div>
  );
};

export default App;
