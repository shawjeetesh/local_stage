import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from 'react'
import Welcome from "../Screen/Auth/Welcome/Welcome.screen";
import { AuthRoutesDataSet } from "../static/routes.static";
import { TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Feather"
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
        // headerShown:false,
        title:"",
        
        header: ()=> (
          <View style={{height:50, justifyContent:"center", paddingHorizontal:10}} >
            <TouchableOpacity>
              <Icon name="chevron-left" size={22} color={"#000"} />
            </TouchableOpacity>

          </View>
        )
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

