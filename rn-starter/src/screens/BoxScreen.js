import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const BoxScreen = () => {
	return <View style={styles.parent}>
		<View style={styles.view1}/>
		<View style={styles.view2}/>
		<View style={styles.view3}/>
	</View>
}

const styles = StyleSheet.create({
	parent: {
		flexDirection: 'row',
		alignItems: 'flex-start'
	},
	view1: {
		width: 50,
		height: 50,
		backgroundColor: 'red'

	},
	view2: {
		width: 50,
		height: 50,
		backgroundColor: 'blue',
		margin: 50

	},
	view3:{
		width: 50,
		height: 50,
		backgroundColor: 'green'

	}


})

export default BoxScreen;