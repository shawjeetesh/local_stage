import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { baseurl } from "./base";

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
        const accessToken = await AsyncStorage.getItem("@access_token");
        if(accessToken)
        config.headers["Authorization"]="Bearer " + accessToken;
        return config
    },
    (error)=>{
        console.log("api call error = ",error);
        return Promise.reject(error);
    }
)

client.interceptors.response.use(
    async(response)=>{
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
