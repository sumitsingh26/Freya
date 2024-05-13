import {useEffect, useState} from 'react';
import {Alert, PermissionsAndroid, Platform} from 'react-native';
import Geolocation from '@react-native-community/geolocation';

const useLocation = () => {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getLocation = async () => {
      try {
        if (Platform.OS === 'android') {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
              title: 'Location Permission',
              message: 'This app requires access to your location.',
              buttonNeutral: 'Ask Me Later',
              buttonNegative: 'Cancel',
              buttonPositive: 'OK',
            },
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            fetchLocation(); // Fetch location if permission is granted
          } else {
            throw new Error('Location permission denied');
          }
        } else if (Platform.OS === 'ios') {
          Geolocation.requestAuthorization();
        }
      } catch (error) {
        setError(error.message);
      }
    };

    getLocation();

    // Clean up
    return () => {
      Geolocation.clearWatch();
    };
  }, []);

  const fetchLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        const {latitude, longitude} = position.coords;
        setLocation({latitude, longitude});
      },
      error => setError(error.message),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
  };

  const requestLocationPermission = async () => {
    try {
      if (Platform.OS === 'android') {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Location Permission',
            message: 'This app requires access to your location.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          fetchLocation(); // Fetch location if permission is granted
        } else {
          throw new Error('Location permission denied');
        }
      } else if (Platform.OS === 'ios') {
        Geolocation.requestAuthorization();
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return {location, error, requestLocationPermission};
};

export default useLocation;
