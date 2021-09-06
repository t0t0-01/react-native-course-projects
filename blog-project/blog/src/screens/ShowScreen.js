import React, {useContext} from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Context } from "../context/BlogContext";
import { EvilIcons } from "@expo/vector-icons"


const ShowScreen = ({navigation}) => {

	const {state} = useContext(Context);

	const blogPost = state.find((blogPost) => blogPost.id === navigation.getParam("id"))

	return <View>
		<Text style={styles.title}>{blogPost.title}</Text>
		<Text style={styles.content}>{blogPost.content}</Text>
	</View>
}

ShowScreen.navigationOptions = ({ navigation }) => {
	return {
		headerRight: <TouchableOpacity onPress={ () => navigation.navigate("Edit", {id: navigation.getParam("id")})}>
			<EvilIcons name="pencil" size={35}/>
		</TouchableOpacity>
	}
/*
For the onPress of the edit icon, we pass in the navigation.getParam("id")
to the EditScreen. We do it this way because we got the id from navigation
as it was given to ShowScreen from the IndexScreen
*/


}

const styles = StyleSheet.create({
	title: {
		fontSize: 30,
		fontWeight: "500",
		alignSelf: "center"

	},
	content: {

	}
})

export default ShowScreen;