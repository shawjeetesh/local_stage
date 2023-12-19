
import { configureStore,combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import global from './global';


const rootReducer = combineReducers({
    global,

})

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ["global"], //Things u want to persist
    // blacklist: ['medGlobalSearch','brands','rapidResponse','news','notifications'], //Things u dont
  };
  
  // Middleware: Redux Persist Persisted Reducer
  const persistedReducer = persistReducer(persistConfig, rootReducer);


const store =  configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>getDefaultMiddleware({
        serializableCheck: false
    }
    )
});

let persistor = persistStore(store);

export type RootState = ReturnType<typeof persistedReducer>
export type AppDispatch = typeof store.dispatch

export default store;
export {
    persistor,
};
