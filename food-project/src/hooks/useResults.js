import {useEffect, useState} from 'react';
import yelp from '../api/yelp';

export default () => {
	const [results, setResults] = useState([]);
	const [errorMessage, setErrorMessage] = useState("");


	/*In this function we use async so that we can use the await 
	command in order to wait for the response. An alternative
	would be to use the .then().  We have to do this because
	the get function is an asychronous operation.
	*/

	const searchApi = async (searchTerm) => {	
		try{
			const response = await yelp.get("/search", {
				params: {
					limit: 50,
					term: searchTerm,
					location: "san jose"
				}

			});
			setResults(response.data.businesses)
		}
		catch (e){
			setErrorMessage("Something went wrong");
		}
	
	} 

	useEffect( () => {
		searchApi("pasta");
	}, []);

	return [searchApi, results, errorMessage];
}