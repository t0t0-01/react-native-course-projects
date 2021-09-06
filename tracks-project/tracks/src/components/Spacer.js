import React from "react";
import { View, StyleSheet } from "react-native";

const Spacer = ({ children }) => {
  return <View style={styles.spacer}>{children}</View>;
};

const styles = StyleSheet.create({
  spacer: {
    margin: 15,
  },
});

export default Spacer;

/*
We create this spacer file in order to avoid making so many styles
and applying themt o different components. That way, whenever we want 
to add some spacing to a component, we simply wrap it with a spacer.
*/
