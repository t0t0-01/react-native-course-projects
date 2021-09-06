import React from "react";
import {Text, StyleSheet, View, Button, TouchableOpacity} from "react-native";
const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text style={styles.text}>Hi there!</Text>
      <Button 
        title="Go to Components Demo" 
        onPress = {() => navigation.navigate("Components")}
      />

      <Button
        title="Go to Lists"
        onPress = {() => navigation.navigate("List")}
      />
      <Button
        title="Go to Images"
        onPress = {() => navigation.navigate("Images")}
      />
      <Button
        title="Go to Counter"
        onPress = {() => navigation.navigate("Counter")}
      />
      <Button
        title="Go to Colors"
        onPress = {() => navigation.navigate("Colors")}
      />
      <Button
        title="Go to Squares"
        onPress = {() => navigation.navigate("Squares")}
      />
      <Button
        title="Go to Text"
        onPress={() => navigation.navigate("Text")}
      />
      <Button
        title="Go to Box"
        onPress={() => navigation.navigate("Box")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
