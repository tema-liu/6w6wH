import { useState } from "react";
import { Location } from "../type/type";

const useUserLocation = () => {
  const [location, setLocation] = useState<Location | null>(null);
  const [error, setError] = useState<string | null>(null);

  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (err) => {
          setError("Error getting user location: " + err.message);
        }
      );
    } else {
      setError("Your browser doesn't support geolocation.");
    }
  };

  return { location, error, getUserLocation };
};

export default useUserLocation;
