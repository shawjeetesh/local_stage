import React, { FC } from 'react'
import { PaperProvider } from 'react-native-paper';
interface PaperUIProviderProps{
  children: React.ReactElement
}

const PaperUIProvider:FC<PaperUIProviderProps> = ({children}) => {
  return (
    <PaperProvider>
        {children}
    </PaperProvider>
  )
}

export default PaperUIProvider
