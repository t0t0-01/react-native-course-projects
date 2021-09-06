import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { navigate } from "../navigationRef";

const authReducer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return { ...state, errorMessage: action.payload };
    case "signin":
      //here we reset the error message because if there was an error during signup, and then we
      //successfully signed in, we want the error to go away. We don't use ...state because now
      //we manually overrode all the keys in the state object.
      return { errorMessage: "", token: action.payload };

    case "clear_error_message":
      return { ...state, errorMessage: "" };

    case "signout":
      return { token: null, errorMessage: "" };

    default:
      return state;
  }
};

const clearErrorMessage = (dispatch) => {
  return () => {
    dispatch({ type: "clear_error_message" });
  };
};

const signup = (dispatch) => {
  //Here, we want to send a request to sign up. If we succeed, we take the
  //JWT and store it on the device. We then dispatch an action to put the
  //token in the state object, and navigate to the mainFlow.
  //If we fail, we dispatch an action to update state with an error and
  //show that error.
  return async ({ email, password }) => {
    try {
      const response = await trackerApi.post("/signup", { email, password });
      console.log(response.data);
      await AsyncStorage.setItem("token", response.data.token);
      dispatch({
        type: "signin",
        payload: response.data.token,
      });

      navigate("TrackList");
    } catch (err) {
      dispatch({
        type: "add_error",
        payload: "Something went wrong with sign up",
      });
      console.log(err);
    }
  };
};

const signin = (dispatch) => {
  //Here, we want to try to signin. We handle success by updating the state,
  //and we handle failure by showing error message.
  return async ({ email, password }) => {
    try {
      const response = await trackerApi.post("/signin", { email, password });
      await AsyncStorage.setItem("token", response.data.token);
      dispatch({
        type: "singin",
        payload: response.data.token,
      });
      navigate("TrackList");
    } catch (err) {
      dispatch({
        type: "add_error",
        payload: "Something went wrong with sign in.",
      });
    }
  };
};

const signout = (dispatch) => {
  return async () => {
    await AsyncStorage.removeItem("token");
    dispatch({ type: "signout" });
    navigate("loginFlow");
  };
};

const tryLocalSignin = (dispatch) => {
  return async () => {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      dispatch({ type: "signin", payload: token });
      navigate("TrackList");
    } else {
      navigate("Signup");
    }
  };
};
export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signout, signup, clearErrorMessage, tryLocalSignin },
  { token: null, errorMessage: "" }
);
