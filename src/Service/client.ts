import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { baseurl } from "./base";
import auth from "@react-native-firebase/auth"
let headerConfig = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
};

const client = axios.create({
    baseURL: baseurl,
    timeout: 8000,
    headers: headerConfig
});



client.interceptors.request.use(
    async(config)=>{
        const accessToken = await auth().currentUser?.getIdToken() || "";
        if(accessToken)
        config.headers["Authorization"]=accessToken;
        console.log("API Call: "+ config.method+" "+ config.baseURL+config.url, config.data||{})
        return config
    },
    (error)=>{
        console.log("api call error = ",error);
        return Promise.reject(error);
    }
)

client.interceptors.response.use(
    async(response)=>{
        console.log("API Response: status:"+response.status+" "+ response.config.method+" "+ response.config.url+" fullfilled");

        return response
    },
    async(error)=>{
        if(error.response.status===401){
            console.log("logut user")
            return Promise.resolve(error.response.data)
        }
        if(error.response.status===411){
            console.log("refresh and call again")
            return Promise.resolve(error.response.data)
        }
    }
)
export default client
