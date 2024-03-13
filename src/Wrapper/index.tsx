import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import StoreProvider from './Store.Provider'
import QueryProvider from './Query.Provider'
import {SafeAreaProvider} from "react-native-safe-area-context"
import PaperUIProvider from './PaperUI.Provider'
interface WrapperProps{
  children: React.ReactElement
}

const Wrapper:FC<WrapperProps> = ({children}) => {
  return (
    <StoreProvider>
      <QueryProvider>
        <PaperUIProvider>
          

          {children}
        </PaperUIProvider>
      </QueryProvider>
    </StoreProvider>
  )
}

export default Wrapper

const styles = StyleSheet.create({})