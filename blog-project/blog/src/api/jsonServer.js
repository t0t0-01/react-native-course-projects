import axios from 'axios'

export default axios.create({
	baseURL: "http://192.168.1.70:3000" //Note that if you are using ngrok, you should put the link here.

})