import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';

const ImageDetail = (props) => {
	return <View>
		<Text>{props.title}</Text>
		<Image source={props.image_src}/>
		<Text>Image Score - {props.score}</Text>
	</View>
};

const style = StyleSheet.create({

}); 

export default ImageDetail;