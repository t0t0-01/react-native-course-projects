import React , {useReducer} from 'react';

export default (reducer, actions, initialState) => {
	const Context = React.createContext();

	const Provider = ({ children }) => {
		const [state, dispatch] = useReducer(reducer, initialState);

		/*
		actions == { addBlogPost: (dispatch) => {return () => {...}}}
		so what we'll do is that we'll loop through the keys in actions.
		For every key, we will have a function that takes dispatch as an
		input, and this function will return another function that uses
		the dispatch to do what we want. So what we will do is that we'll
		loop through the keys, and fro every key, call the first function
		so that we end up getting the actual function that does what we want
		*/

		const boundActions = {};

		for (let key in actions){
			boundActions[key] = actions[key](dispatch);
		}


		return <Context.Provider value={{ state, ...boundActions }}>
			{children}
		</Context.Provider>

	}

	return { Context, Provider }
};