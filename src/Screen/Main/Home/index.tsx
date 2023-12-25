import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../Routes/Auth.Stack'
import auth from "@react-native-firebase/auth"
import ShowSplashMessage from '../../../Utility/flashMessage';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;
interface HomeProps{
  route: Props["route"],
  naviation: Props["navigation"],
}
const Home = () => {
  const _logout = async()=>{
    await auth().signOut();
    ShowSplashMessage("Logout Successfully", "info");
    
  }
  return (
    <View>
      <Text>Home</Text>
      <Button title='LOGOUT' onPress={_logout} />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})