import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";

const trackReducer = (state, action) => {
  switch (action.type) {
    case "fetch_tracks":
      return action.payload;

    default:
      return state;
  }
};

const fetchTracks = (dispatch) => {
  return async () => {
    const response = await trackerApi.get("/tracks");
    dispatch({ type: "fetch_tracks", payload: response.data });
  };
};

const createTrack = (dispatch) => {
  return async (name, locations) => {
    await trackerApi.post("/tracks", { name: name, locations: locations });
  };
};

export const { Provider, Context } = createDataContext(
  trackReducer,
  { fetchTracks, createTrack },
  []
);

/*
In this context file, we are taking care of saving a track (that is,
adding it to the database by making a request), as well as fetching
the tracks to display them in trackListScreen. 
We could have done these in LocationContext, but we are doing them
here instead to practice how two different contexts can interact
together.
*/
