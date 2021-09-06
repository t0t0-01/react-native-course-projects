import React, { useReducer, useState} from 'react'
import {View, StyleSheet, Text} from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 15;


const reducer = (state, action) => { //we define it outisde of squarescreen by convention
	//state === { red: number, green: number, blue: number}
	//action === { colorToChange: red || green || blue, amount: COLOR_INCREMENT}

	switch (action.colorToChange){
		case 'red':
			if (state.red + action.amount > 255 || state.red + action.amount < 0)
				return state
			return {...state, red: state.red + action.amount}
		case 'green':
			if (state.green + action.amount > 255 || state.green + action.amount < 0)
				return state;
			return {...state, green: state.green + action.amount}
		case 'blue':
			if (state.blue + action.amount > 255 || state.blue + action.amount < 0)
				return state;
			return {...state, blue: state.blue + action.amount}
		default:
			return state;

	}




}


const SquareScreen = () => {
	const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue: 0})
	const { red, green, blue } = state; //destructing
	return <View>
		<ColorCounter
			onIncrease={() => dispatch({ colorToChange: 'red', amount: COLOR_INCREMENT})}
			onDecrease={() => dispatch({ colorToChange: 'red', amount: -1*COLOR_INCREMENT})}
			color="Red"
		/>
		<ColorCounter
			onIncrease={() => dispatch({ colorToChange: 'blue', amount: COLOR_INCREMENT})}
			onDecrease={() => dispatch({ colorToChange: 'blue', amount: -1*COLOR_INCREMENT})}
			color='blue'
		/>
		<ColorCounter
			onIncrease={() => dispatch({ colorToChange: 'green', amount: COLOR_INCREMENT})}
			onDecrease={() => dispatch({ colorToChange: 'green', amount: -1*COLOR_INCREMENT})}
			color="green"
		/>
		<View style={{height: 150, width: 150, backgroundColor: `rgb(${red},${green},${blue})`}}/>
	</View>

}






/*  Without Reducers
const SquareScreen = () => {
	const [red, setRed] = useState(0);
	const [green, setGreen] = useState(0);
	const [blue, setBlue] = useState(0);

	const setColor = (color, change) => {
		switch (color){
			case 'red':
				if(red + change > 255 || red + change < 0)
					return;
				setRed(red + change)
				break;
			case 'blue':
				if(blue + change > 255 || blue + change < 0)
					return;
				setBlue(blue + change);
				break;
			case 'green':
				if(green + change > 255 || green + change < 0)
					return;
				setBlue(green + change);
				break;
		}

	 }

	return <View>
		<ColorCounter 
			color="Red" 
			onIncrease={() => setColor("red", COLOR_INCREMENT)} 
			onDecrease={() => setColor("red", -1 * COLOR_INCREMENT)}
		/>
		<ColorCounter 
			color="Green"
			onIncrease={() => setColor("green", COLOR_INCREMENT)}
			onDecrease={() => setColor("green", -1 * COLOR_INCREMENT)} 
		/>
		<ColorCounter 
			color="Blue"
			onIncrease={() => setColor("blue", COLOR_INCREMENT)}
			onDecrease={() => setColor("blue", -1 * COLOR_INCREMENT)}
		/>
		<View style={{height: 150, width: 150, backgroundColor: `rgb(${red},${green},${blue})`}}/>
	</View>

}
*/
const styles = StyleSheet.create({})

export default SquareScreen;