import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () =>{
	return <View>
		<ImageDetail title="Forest" image_src={require("../../assets/forest.jpg")} score="9"/>
		<ImageDetail title="Beach" image_src={require("../../assets/beach.jpg")} score="7"/>
		<ImageDetail title="Mountain" image_src={require("../../assets/mountain.jpg")} score="3"/>
	</View>

}

const style = StyleSheet.create({



})

export default ImageScreen;