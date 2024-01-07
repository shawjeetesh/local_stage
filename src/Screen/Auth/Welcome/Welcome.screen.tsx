import { BackHandler, FlatList, StyleSheet, View } from 'react-native'
import React, { FC, useCallback, useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../Store'
import { Increase } from '../../../Store/global'
// import { useQuery } from '@tanstack/react-query'
// import useSampleQuery from '../../../Query/useSampleQuery'
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../Routes/Auth.Stack'
// import Test from '../../Test'
import data from './data.static'
import Card from './Card.component'
import { SCREEN_WIDTH } from '../../../Utility/normalizer'
import ArrowBtnComponent from './ArrowBtn.component'

type Props = NativeStackScreenProps<RootStackParamList, 'Welcome'>;
interface WelcomeProps {
  route: Props["route"],
  naviation: Props["navigation"],
}

const Welcome: FC<WelcomeProps> = () => {
  const count = useSelector((state: RootState) => state.global.count);
  const [CurrentPos, setCurrentPos] = useState(0);
  const [ExitAppPressCount, setExitAppPressCount] = useState(0)
  const sliderRef = useRef<FlatList>(null);
  const dispatch = useDispatch();
  // const {data, isLoading,error,refetch} = useSampleQuery()
  const __IncreaseNumber = () => {
    dispatch(Increase())
    // refetch()
  }

  const _updatePos = useCallback(()=>{

    CurrentPos<2 && _goToPos(CurrentPos+1)
  },[CurrentPos])

  const _goToPos = useCallback((pos:number)=>{
    sliderRef.current?.scrollToIndex({
      index : pos,
      animated:true,

    })
    setCurrentPos((state)=> state+1)
  },[])

  useEffect(() => {
    let timeoutClear:any;
    BackHandler.addEventListener("hardwareBackPress", ()=>{
      let Exit = true
      setCurrentPos((state)=>{
        console.log(state)
        if(state){
          _goToPos(state-1)
          return state-1
        }
        setExitAppPressCount(state=>{
        console.log("setExitAppPressCount", state)

          if(state>0){
            Exit = false
            BackHandler.exitApp();
          }
          return state+1
        })
        timeoutClear = setTimeout(() => {
          setExitAppPressCount(0)
        }, 3000);
        return state
      })
      console.log("exit", Exit)
      return Exit
    })  
  return ()=>{ 
      BackHandler.removeEventListener("hardwareBackPress",()=>{
      console.log("_goToPos")
      
      return true
    })
    timeoutClear && timeoutClear()
  }
  }, [])
  

  // if (isLoading) return 'Loading...'

  // if (error) return 'An error has occurred: ' + error.message
  return (
    <View style={styles.container}>
      {/* <Text>Please Provie A Mobile Number {isLoading && "loading"} {data &&  JSON.stringify(data)}</Text>
      <Button title='Click' onPress={__IncreaseNumber} />
      <Test /> */}
      <View style={{position:"relative", flex:1}}>

      <FlatList
        data={data}
        horizontal
        ref={sliderRef}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        scrollEnabled={false}
        renderItem={(props)=><View style={{flex:1, width:SCREEN_WIDTH}}>
           <Card {...props} />
        </View>}
        
      />

      <ArrowBtnComponent pos={CurrentPos} onClick={_updatePos} />
      </View>

    </View>
  )
}

export default Welcome

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  

})