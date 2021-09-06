import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native'

const BlogPostForm = ({ onSubmit, initialValues }) => {

	const [title, setTitle] = useState(initialValues.title);
	const [content, setContent] = useState(initialValues.content);


	return <View>
		<Text style={styles.label}>Enter Title</Text>
		<TextInput style={styles.textInput} value={title} onChangeText={(text) => setTitle(text)}/>
		<Text style={styles.label}>Enter Content</Text>
		<TextInput style={styles.textInput} value={content} onChangeText={(text) => setContent(text)}/>
		<Button title="Save Blog Post" onPress={() => onSubmit(title, content)}/>
	</View>

}

BlogPostForm.defaultProps = {
	initialValues: {
		title: "",
		content: ""
	}

}

const styles = StyleSheet.create({
	textInput: {
		fontSize: 18,
		borderColor: "black",
		borderWidth: 1,
		padding: 10,
		marginHorizontal: 5
	},
	label: {
		fontSize: 20,
		margin: 10

	}


});

export default BlogPostForm