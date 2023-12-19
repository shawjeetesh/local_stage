import React, { FC } from 'react'
import { Provider } from 'react-redux'
import store, { persistor } from '../Store'
import { PersistGate } from 'redux-persist/integration/react'

interface StoreProviderProps{
  children: React.ReactElement
}

const StoreProvider:FC<StoreProviderProps> = ({children}) => {
  return (
    <Provider store={store}>
         <PersistGate loading={null} persistor={persistor}>

            {children}
         </PersistGate>
    </Provider>
  )
}

export default StoreProvider
