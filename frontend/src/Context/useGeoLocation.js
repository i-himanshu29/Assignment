import { useState, useEffect } from "react";

const useGeoLocation = () => {
  const [location, setLocation] = useState({
    loaded: false,
    coordinates: { lat: "", lng: "" },
  });
  const [error, setError] = useState(null);

  const onSuccess = (position) => {
    setLocation({
      loaded: true,
      coordinates: {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      },
    });
  };

  const onError = (error) => {
    setError(error.message);
    setLocation({ loaded: true });
  };

  useEffect(() => {
    if (!("geolocation" in navigator)) {
      setError("Geolocation not supported");
      setLocation({ loaded: true });
      return;
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }, []);

  return { location, error };
};

export default useGeoLocation;
