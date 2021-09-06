import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const ComponentsScreen = function(){

	const name = "Antonio";

	return(
		<View>
			<Text style = {{fontSize: 45}}>Getting started with React Native!</Text>
			<Text style = {{fontSize: 20}}> My name is {name}</Text>
		</View>
	);


};

export default ComponentsScreen;







/*
import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const ComponentsScreen = () =>{

	return(
		<View>
			<Text style = {styles.textStyle}>This is the components Screen</Text>
			<Text style = {{fontSize: 10}}>Hi there!</Text>
		</View>
	);
};


const styles = StyleSheet.create({
	textStyle: {
		fontSize: 30
	}

});


export default ComponentsScreen;
*/