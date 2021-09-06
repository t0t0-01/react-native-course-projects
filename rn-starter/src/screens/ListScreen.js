import React from 'react'
import {View, Text, StyleSheet, FlatList} from 'react-native'

const ListScreen = function(){
	const friends = [
		{name: "Friend 1", age: 20},
		{name: "Friend 2", age: 45},
		{name: "Friend 3", age: 32},
		{name: "Friend 4", age: 27},
		{name: "Friend 5", age: 53},
		{name: "Friend 7", age: 30}
	];

	return (
		<FlatList 
			keyExtractor = {(friend) => friend.name}
			data = {friends} 
			renderItem={ ({item}) => {
				return <Text style={styles.textStyle}>{item.name + " - Age " + item.age}</Text>;
			}}
		/>
	)
}

	/*
	How does the FlatList work? It needs two 'props': the renderItem
	and the data props. The data prop takes the object that has the
	data. The renderItem prop takes a function that says how to 
	parse the data. You two ways to do it:
		renderItem = {(element)} => {...}
			In this way, element === { item: {name: 'Friend 1'}, 
									   index : 0}
			
		renderItem = { ({item}) } => {...{
			In this way, item === {name: 'Friend 1'}
		}
		}
	So basically the second way destructures the object in the first way.
	*/




const styles = StyleSheet.create({
	textStyle:{
		marginVertical: 50,
		marginHorizontal: 0
	}


})

export default ListScreen;

/*
We add the key thing because if we don't, we will get a warning. The thing is that 
when we have a list and we delete an element from the array the list is made of,
how would react update the list? If we don't have a key property, React will
delete the entire list and build it up from scratch, which is time consuming. 
When we add the key thing, React would associate each entry in the list
with the specified key. Now when we delete an element, React would refer
to the key in order to delete the corresponding element from the list.
THen it would simply shift the other elements accordingly.
To add the keys, you can either add a 'key' key to the original object, 
or you can add a keyExtractor prop to the FlatList element. This prop 
would take a function that  returns the key value.
*/