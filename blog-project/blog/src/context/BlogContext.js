import React, {useReducer} from 'react';
import createDataContext from './createDataContext';
import jsonServer from '../api/jsonServer';

/*When we create the Context object, we are also creating the Provider
refer to onenote for explanation.
*/

const blogReducer = (state, action) => {

	switch(action.type){
		//case "add_blogpost":
		//	return [...state, { id: Math.floor(Math.random() * 99999), title: action.payload.title, content: action.payload.content}];
 		//we no longer need the add_blogpost case because we will not be dispatching the add post. We are using the server.


		case "delete_blogpost":
			return state.filter( (blogPost) => blogPost.id !== action.payload)

		case "edit_blogpost":
			return state.map((blogPost) => {
				if (blogPost.id === action.payload.id)
					return action.payload;
				else
					return blogPost;

			});

		case "get_blogposts":
			return action.payload;

		default:
			return state;
 
	}
}

const deleteBlogPost = (dispatch) => {
	return async (id) => {
		await jsonServer.delete(`/blogposts/${id}`)


		dispatch({type: "delete_blogpost", payload: id})
		/*

		Here, we have two options for the update to appear on screen:
			We can either update the local state using dispatch the way we did here, OR
			we can reload the json data we got using get. 
		In this case, we updated the local state only. We could have refreshed the entire list
		by getting the json data and dispatching a get_blogposts type.
		
		
		const response = await jsonServer.get("/blogposts");
		dispatch({ type: "get_blogposts", payload: response.data})

		*/

	}
}

const editBlogPost = (dispatch) => {
	return async (id, title, content, callback) => {
		await jsonServer.put(`/blogposts/${id}`, {title, content})


		dispatch({
			type: "edit_blogpost",
			payload: {id, title, content}
		})
		if (callback)
			callback()
	}
}

/*
Why did we add the callback in the addBlogPost? When we add a blog post,
we want to automatically go back to the index screen. We could have 
done that in the Button directly: after calling addBlogPOst, simply
add a navigation.navigate function. However, the issue is that,
what if we had an API call? In such a case, we don't want to switch
screens before getting the reply, so we need to make use of async
and await. As such, we put the callback in addBlogPost directly 
and then make it async and use await axios (We didnt do that here).
*/

const addBlogPost = (dispatch) => {

	return async (title, content, callback) => {
		await jsonServer.post("/blogposts", { title, content })





	//	dispatch({type: "add_blogpost", payload: {title: title, content: content}});
	//This dispatch is no longer needed because we are no longer updating the state; we
	//are using the server.	
		if (callback)
			callback()
	};

}


/*The following method is the one that will be used to fetch the data
from the server. It is async. After getting the data, we add in the
data we got from the api into the state of the app.
*/

const getBlogPosts = (dispatch) => {

	return async () => {
		const response = await jsonServer.get("/blogposts");
		//response.data === [ {}, {}, {} ]

		dispatch({ type: "get_blogposts", payload: response.data})}

	
}

export const { Context, Provider } = createDataContext(blogReducer, {addBlogPost, deleteBlogPost, editBlogPost, getBlogPosts}, [])