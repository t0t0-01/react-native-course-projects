import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';
import useResults from '../hooks/useResults'
import ResultsList from '../components/ResultsList'

const SearchScreen = ( ) => {
	const [term, setTerm] = useState("");
	const [searchApi, results, errorMessage] = useResults();

	const filterResultsByPrice = (price) => {
		return results.filter( (result) => {
			return result.price === price;
		});
	};

	/*This flex property is to prevent cutoff of elements inside the view.
	  instead of doing this, we could have wrapped the elemets inside <> </>
	*/
	
	return <View style={ {flex:1} }> 
		<SearchBar 
			term={term} 
			onTermChange={(newTerm) => setTerm(newTerm)}
			onTermSubmit={() => searchApi(term)}
		/>
		{errorMessage ? <Text>{errorMessage}</Text> : null}

		<ScrollView>
			<ResultsList results={filterResultsByPrice('$')} title="Cost Effective"/>
			<ResultsList results={filterResultsByPrice('$$')} title="Bit Pricier"/>
			<ResultsList results={filterResultsByPrice('$$$')} title="Big Spender"/>
			<ResultsList results={filterResultsByPrice('$$$$')} title="Most Expensive"/>
		</ScrollView>
	</View>
}
/*Remember: since the parent of the SearchBar needs to use the text,
we create a state in the parent (SearchScreen). And to update
the text in the input, we basically "force" the value of the
state into it. To do so, we need to pass two props: one that 
is the term itself, and one that returns the setTerm function.
We then use these props for the SearchBar to update the
TextInput element in the SearchBar component. We pass the term
to a 'value' prop, and the onTermChange to the 'onChangeText'
prop
*/

const styles = StyleSheet.create({});

export default SearchScreen;