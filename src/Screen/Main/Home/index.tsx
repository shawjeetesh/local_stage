import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../Routes/Auth.Stack'

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;
interface HomeProps{
  route: Props["route"],
  naviation: Props["navigation"],
}
const Home = () => {
  return (
    <View>
      <Text>Home</Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})