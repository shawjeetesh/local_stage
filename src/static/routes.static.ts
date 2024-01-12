import { StackNavigationState } from "@react-navigation/native";
import Welcome from "../Screen/Auth/Welcome/Welcome.screen";
import { RootStackParamList } from "../Routes/Auth.Stack";
import { ReactElement } from "react";
import Home from "../Screen/Main/Home";
import OTPVerification from "../Screen/Auth/OTPVerification/OTPVerification.screen";
type ScreenConfig = {
    name: string;
    component: React.ComponentType<any>; // Define component type explicitly
    initialParams?: { itemId: number };
  };

// Define screen configurations
  

const AuthRoutesDataSet:ScreenConfig[] = [
    {
        name:"Welcome",
        component : Welcome
    },
    {
        name:"OTPVerification",
        component : OTPVerification
    },
    
]
const MainRoutesDataSet:ScreenConfig[] = [
 
    {
        name:"Home",
        component : Home,
        
    }
]



export {
    AuthRoutesDataSet,
    MainRoutesDataSet
}