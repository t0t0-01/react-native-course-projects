import createDataContext from "./createDataContext";

const locationReducer = (state, action) => {
  switch (action.type) {
    case "add_current_location":
      return { ...state, currentLocation: action.payload };
    case "start_recording":
      return { ...state, recording: true };
    case "stop_recording":
      return { ...state, recording: false };
    case "add_location":
      return { ...state, locations: [...state.locations, action.payload] };
    case "change_name":
      return { ...state, name: action.payload };
    case "reset":
      return { ...state, name: "", locations: [] };
    default:
      return state;
  }
};

const changeName = (dispatch) => {
  return (name) => {
    dispatch({ type: "change_name", payload: name });
  };
};

const startRecording = (dispatch) => {
  return () => {
    dispatch({ type: "start_recording" });
  };
};

const stopRecording = (dispatch) => {
  return () => {
    dispatch({ type: "stop_recording" });
  };
};

const addLocation = (dispatch) => {
  return (location, recording) => {
    dispatch({ type: "add_current_location", payload: location });
    if (recording) {
      dispatch({ type: "add_location", payload: location });
    }
  };
};

const reset = (dispatch) => {
  return () => {
    dispatch({ type: "reset" });
  };
};
export const { Context, Provider } = createDataContext(
  locationReducer,
  { startRecording, stopRecording, addLocation, changeName, reset },
  { name: "", recording: false, locations: [], currentLocation: null }
);
/*
So here we're making our Location Context. I will explain the recording part:
we want to be able to start and stop recording. The difference between recording
and adding a location is that when recording, we want to add the points recorded
to the locations array in the context. As such, when we call addLocation, we
pass in an argument that checks if we're recording or not. If we are, it adds
the location recorded to the state.
As for the start and stop recording, these will be used when we press the button.
We will use them to update the recording flag in the state.
We also include a changeName function to set the name of the track.

*/
