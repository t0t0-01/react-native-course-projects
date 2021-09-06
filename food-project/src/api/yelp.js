import axios from 'axios';



export default axios.create({
	baseURL: "https://api.yelp.com/v3/businesses",
	headers: {
		Authorization: "Bearer 0Msp-H-TA10-gatvLw3qix6DrHoyH5G5DPjTQeZFFi3F6C5TqcOo2YeV5guIoJeNsfj4i8zCAIqyx3g9z-AQ9BkNv19mSC0MjF6t_LUJG5LpC_1rqc9wrIPUSJjHYHYx"
		
	}

})