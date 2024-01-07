import { StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import StoreProvider from './Store.Provider'
import QueryProvider from './Query.Provider'
import {SafeAreaProvider} from "react-native-safe-area-context"
interface WrapperProps{
  children: React.ReactElement
}

const Wrapper:FC<WrapperProps> = ({children}) => {
  return (
    <StoreProvider>
      <QueryProvider>
        <SafeAreaProvider>

        {children}
        </SafeAreaProvider>
      
      </QueryProvider>
    </StoreProvider>
  )
}

export default Wrapper

const styles = StyleSheet.create({})