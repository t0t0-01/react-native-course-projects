import React from 'react'
import { FlatList, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import ResultsDetail from './ResultsDetail';

/*The thing with withNavigation is that we want to use the navigation object
inside of ResultsList. To do so, we can do it in two ways: we can pass the
navigation object to SearchScreen, then inside SearchScreen pass it to the
ResultsLists. However, we can skip this step since SearchScreen does not
use the obejct. What we can do is import the withNavigation function frmo
react-navigation, and when exporting, we wrap our ResultsList with this 
function. This would return the ResultsList, but with the navigation 
object passed into it (so you can directly refer to it in the prop list).
That way, we can remove the mention of navigation frmo SearchScreen.
*/
 


const ResultsList = ( { title, results, navigation } ) => {
	if (!results.length)
		return null;

	return <View style={styles.container} >
		<Text style={styles.titleStyle}>{title}</Text>
		<FlatList 
			horizontal={true}
			showsHorizontalScrollIndicator={false}
			data={results}
			keyExtractor={ (result) => result.id}
			renderItem={({ item }) => {
				return (
					<TouchableOpacity onPress={() => {navigation.navigate("ResultsShow", {id: item.id})}}>
						<ResultsDetail result={item}/>
					</TouchableOpacity>


				)
			}}

		/>
	</View>
}

const styles = StyleSheet.create({
	titleStyle: {
		fontSize: 18,
		fontWeight: "bold",
		marginLeft: 15,
		marginBottom: 5
	},

	container: {
		marginBottom: 10
	}


})
export default withNavigation(ResultsList);