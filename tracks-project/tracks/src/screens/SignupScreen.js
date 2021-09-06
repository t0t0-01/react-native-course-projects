import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Context as AuthContext } from "../Context/AuthContext";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
import { NavigationEvents } from "react-navigation";

const SignupScreen = ({ navigation }) => {
  const { state, signup, clearErrorMessage } = useContext(AuthContext);

  //Here, we will make a reusable component to display the email and
  //password forms since we will be using them twice.
  return (
    <View style={styles.container}>
      <NavigationEvents
        onWillBlur={() => {
          clearErrorMessage();
        }}
      />
      <AuthForm
        headerText="Sign up for Tracker"
        errorMessage={state.errorMessage}
        submitButtonText="Sign up"
        onSubmit={({ email, password }) => signup({ email, password })}
      />
      <NavLink
        routeName="Signin"
        text="Already have an account? Sign in instead."
      />
    </View>
  );
};

SignupScreen.navigationOptions = () => {
  return { headerShown: false };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 250,
  },
});

export default SignupScreen;
