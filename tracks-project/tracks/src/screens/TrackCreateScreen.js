import "../mockLocation";
import React, { useContext, useCallback } from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native";
import { SafeAreaView, withNavigationFocus } from "react-navigation";
import Map from "../components/Map";
import useLocation from "../hooks/useLocation";
import { Context as LocationContext } from "../Context/LocationContext";
import TrackForm from "../components/TrackForm";
import { FontAwesome } from "@expo/vector-icons";

const TrackCreateScreen = ({ isFocused }) => {
  //The addLocation is to put the current location in the context
  const { state, addLocation } = useContext(LocationContext);
  const callback = useCallback(
    (location) => {
      addLocation(location, state.recording);
    },
    [state.recording]
  );

  const [err] = useLocation(isFocused || state.recording, callback);

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text h3>Create a Track</Text>
      <Map />
      {err ? <Text>Please enable location services</Text> : null}
      <TrackForm />
    </SafeAreaView>
  );
};

TrackCreateScreen.navigationOptions = {
  title: "Add Track",
  tabBarIcon: <FontAwesome name="plus" size={20} />,
};
const styles = StyleSheet.create({});

export default withNavigationFocus(TrackCreateScreen);
