import { StackNavigationState } from "@react-navigation/native";
import Welcome from "../Screen/Auth/Welcome/Welcome";
import { RootStackParamList } from "../Routes/Auth.Stack";
import { ReactElement } from "react";
import Home from "../Screen/Main/Home";
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