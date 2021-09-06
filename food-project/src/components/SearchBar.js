import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather name="search" style={styles.search} />
      <TextInput
        autoCorrect={false}
        style={styles.input}
        placeholder="Search"
        value={term}
        onChangeText={(newTerm) => onTermChange(newTerm)}
        onEndEditing={() => onTermSubmit()}
        defaultValue="Search"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    marginBottom: 10,
    marginTop: 10,
    backgroundColor: "#F0EEEE",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: "row",
  },

  input: {
    marginHorizontal: 15,
    flex: 1, //we add this so that the textInput extends
    //horizontally
    fontSize: 18,
  },

  search: {
    alignSelf: "center", //we dont put alignItems in the bckrnd
    fontSize: 35, //because if we do, the box where we
    //we can click on the input decreases
    //we want it to be stretched vertically
  },
});

export default SearchBar;
