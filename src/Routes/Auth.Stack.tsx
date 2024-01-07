import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from 'react'
import Welcome from "../Screen/Auth/Welcome/Welcome.screen";
import { AuthRoutesDataSet } from "../static/routes.static";

export type RootStackParamList = {
    Welcome: undefined;
    Home: undefined;
};
  
const Stack = createNativeStackNavigator<RootStackParamList>();



const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{
        animation:"fade",
        orientation:"portrait",
        statusBarColor:"#000",
        headerShown:false,
      }}>
        {AuthRoutesDataSet.map((item)=><Stack.Screen 
        // @ts-ignore
        name={item.name} 
        component={item.component} key={item.name} />)}
        {/* <Stack.Screen name={"Welcome"} component={Welcome}  /> */}
      </Stack.Navigator>
  )
}

export default AuthStack

