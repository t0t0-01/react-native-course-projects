import { useContext } from "react";
import { Context as TrackContext } from "../Context/TrackContext";
import { Context as LocationContext } from "../Context/LocationContext";
import { navigate } from "../navigationRef";

export default () => {
  const { createTrack } = useContext(TrackContext);
  const {
    state: { name, locations },
    reset,
  } = useContext(LocationContext);

  const saveTrack = async () => {
    await createTrack(name, locations);
    //now, we want to reset the track form. After creating a track
    //and saving it, we would want to go to the trackList screen, as
    //well as remove everything from the trackCreate screen so that
    //when the user goes back, the previous data is not present.
    //This basically means that we want to reset our state.
    reset();
    navigate("TrackList");
  };

  return [saveTrack];
};
