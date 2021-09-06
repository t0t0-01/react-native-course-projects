import { useState, useEffect } from "react";
import {
  Accuracy,
  requestForegroundPermissionsAsync,
  watchPositionAsync,
} from "expo-location";

export default (shouldTrack, callback) => {
  const [err, setErr] = useState(null);
  let subscriber;

  const startWatching = async () => {
    try {
      await requestForegroundPermissionsAsync();
      subscriber = await watchPositionAsync(
        {
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 1000,
          distanceInterval: 10,
        },
        (location) => {
          callback(location);
        }
      );
    } catch (err) {
      console.log(err);
      setErr(err);
    }
  };

  useEffect(() => {
    if (shouldTrack) startWatching();
    else {
      if (subscriber) subscriber.remove();
      subscriber = null;
    }
    return () => {
      if (subscriber) subscriber.remove();
    };
  }, [shouldTrack, callback]);

  return [err];
};

/*
Here, we want to write a function that gets the location of the user. Previously,
we did that directly in TrackCreateScreen. We could have kept it that way, 
but we extracted it into a separate file in case we want to reuse it.
This code was copied exactly as it was in the TrackCreateScreen; the only
difference is that we returned the error (in an array because that's the
convention for hooks), and we pass in a callback function. In TracksCreate,
we didn't put this callback; we put the addLocation directly.
*/
