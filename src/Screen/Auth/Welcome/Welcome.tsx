import { Button, StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../Store'
import { Increase } from '../../../Store/global'
import { useQuery } from '@tanstack/react-query'
import useSampleQuery from '../../../Query/useSampleQuery'
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../Routes/Auth.Stack'
import Test from '../../Test'

type Props = NativeStackScreenProps<RootStackParamList, 'Welcome'>;
interface WelcomeProps{
  route: Props["route"],
  naviation: Props["navigation"],
}

const Welcome:FC<WelcomeProps> = () => {
  const count = useSelector((state:RootState)=> state.global.count);
  const dispatch = useDispatch();
  const {data, isLoading,error,refetch} = useSampleQuery()
  const __IncreaseNumber = ()=>{
    dispatch(Increase())
    refetch()
  }
  

  // if (isLoading) return 'Loading...'

  // if (error) return 'An error has occurred: ' + error.message

  return (
    <View style={styles.container}>
      <Text>Please Provie A Mobile Number {isLoading && "loading"} {data &&  JSON.stringify(data)}</Text>
      <Button title='Click' onPress={__IncreaseNumber} />
      <Test />
    </View>
  )
}

export default Welcome

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})