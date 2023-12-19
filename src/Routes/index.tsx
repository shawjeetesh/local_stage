import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import NavigationRoot from './Navigation.Root'
import AuthStack from './Auth.Stack'

const Routes = () => {
  return (
    <NavigationRoot>
      <AuthStack />
    </NavigationRoot>
  )
}

export default Routes

const styles = StyleSheet.create({})