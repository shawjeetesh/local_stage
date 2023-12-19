import { StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import { NavigationContainer } from '@react-navigation/native';

interface NavigationRootProps{
  children: React.ReactElement
}
  
const NavigationRoot:FC<NavigationRootProps> = ({children}) => {
  return (
    <NavigationContainer>
    {children}

    </NavigationContainer>
  )
}

export default NavigationRoot

const styles = StyleSheet.create({})