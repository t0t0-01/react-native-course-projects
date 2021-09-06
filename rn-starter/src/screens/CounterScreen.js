import React, {useState, useReducer} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const reducer = (state, action) => {
		return {...state, counter: state.counter + action.payload}
}



const CounterScreen = () => {
	const [state, dispatch] = useReducer(reducer, {counter: 0})

	return <View>
		<Button
			title="Increase"
			onPress={() => {
				dispatch({type: 'increment', payload: 1})
			}}
		/>

		<Button
			title="Decrease"
			onPress={() => {
				dispatch({type: 'decrement', payload: -1})
			}}
		/>
		<Text>Current Counter: {state.counter}</Text>
	</View>



}






/*Without reducers
const CounterScreen = () => {
	const [counter, setCounter] = useState(0);



	return <View>
		<Button 
			title="Increase"
			onPress={()=>{
				setCounter(counter + 1)
			}}
		/>
		<Button 
			title="Decrease" 
			onPress={()=>{setCounter(counter - 1)
			}}
		/>
		<Text>Current Count: {counter}</Text>
	</View>
}
*/
const styles = StyleSheet.create({});

export default CounterScreen;