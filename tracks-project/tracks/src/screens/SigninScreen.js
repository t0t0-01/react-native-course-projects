import React, { useContext } from "react";
import { View, StyleSheet, Text } from "react-native";
import { NavigationEvents } from "react-navigation";
import NavLink from "../components/NavLink";
import AuthForm from "../components/AuthForm";
import { Context as AuthContext } from "../Context/AuthContext";
const SigninScreen = () => {
  const { state, signin, clearErrormessage } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <NavigationEvents
        onWillBlur={() => {
          clearErrormessage();
        }}
      />

      <AuthForm
        headerText="Sign in to your account"
        errorMessage={state.errorMessage}
        submitButtonText="Sign in"
        onSubmit={({ email, password }) => signin({ email, password })}
      />
      <NavLink
        routeName="Signup"
        text="Don't have an account? Sign up instead."
      />
    </View>
  );
};

SigninScreen.navigationOptions = {
  headerShown: false,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 250,
  },
});

export default SigninScreen;
