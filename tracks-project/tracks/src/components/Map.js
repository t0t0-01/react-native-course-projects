import React, { useContext } from "react";
import { Text, StyleSheet, ActivityIndicator } from "react-native";
import MapView, { Polyline, Circle } from "react-native-maps";
import { Context as LocationContext } from "../Context/LocationContext";

const Map = () => {
  //We take the state from the context in order to display the current location
  const {
    state: { currentLocation, locations },
  } = useContext(LocationContext);

  //The first time we start our application, we don't have a location.
  //So we are taking care of this case here by displaying a loading screen.
  if (!currentLocation) {
    return <ActivityIndicator size="large" style={{ marginTop: 200 }} />;
  }
  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitudeDelta: 0.01,
        ...currentLocation.coords,
        longitudeDelta: 0.01,
      }}
    >
      <Circle
        center={currentLocation.coords}
        radius={30}
        strokeColor="rgba(158, 158, 255, 1.0)"
      />
      <Polyline coordinatets={locations.map((loc) => loc.coords)} />
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
});

export default Map;
