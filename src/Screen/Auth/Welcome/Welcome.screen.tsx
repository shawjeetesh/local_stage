import { BackHandler, FlatList, StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { FC, useCallback, useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../Store'
import { Increase } from '../../../Store/global'
import { useQuery } from '@tanstack/react-query'
import useSampleQuery from '../../../Query/useSampleQuery'
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../Routes/Auth.Stack'
import Test from '../../Test'
import data from './data.static'
import Card from './Card.component'
import { SCREEN_HEIGHT, SCREEN_WIDTH, fontPixel } from '../../../Utility/normalizer'
import ArrowBtnComponent from './ArrowBtn.component'
import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth";
import { Avatar, TextInput } from 'react-native-paper'
import CTextCustom from '../../../Components/CText/CText.Custom'
import ShowSplashMessage from '../../../Utility/flashMessage'

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

  const _updatePos = useCallback(async()=>{

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
    auth().currentUser?.getIdToken(true)
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
  
  const [confirm, setConfirm] = useState<FirebaseAuthTypes.ConfirmationResult>();

  // verification code (OTP - One-Time-Passcode)
  const [code, setCode] = useState('');

  // Handle login


  // Handle the button press
  async function signInWithPhoneNumber() {
    const confirmation = await auth().signInWithPhoneNumber("+91 729-089-6805");
    setConfirm(confirmation);
  }

  async function confirmCode() {
    try {
        if(!confirm)
        return console.log("confirm not found");
        const res = await confirm.confirm(code);
        ShowSplashMessage("OTP Verified Successfully", "success")
        auth().currentUser?.getIdToken()
    } catch (error) {
      console.log('Invalid code.');
      ShowSplashMessage("Invalid OTP Code", "danger")

    }
  }

  // if (isLoading) return 'Loading...'

  // if (error) return 'An error has occurred: ' + error.message
  return (
    <Test />
  )
  return (
    <View style={styles.container}>
     
  
      <View style={{flex:1, justifyContent:"center", alignItems:"center", padding:20}}>
        <View style={{flex:0.5 , justifyContent:"flex-end", alignItems:"center"}}>
          <Avatar.Text size={100} label='test'  />
          
          <CTextCustom style={{fontWeight:"700", fontSize: fontPixel(24), color:"#000", marginTop:10}}>
            Registration
          </CTextCustom>

          <CTextCustom style={{fontWeight:"400", fontSize: fontPixel(18), color:"#a1a1a1", paddingTop:"10%", textAlign:"center"}}>
            we will send a text message to verify {"\n"} your phone number.
          </CTextCustom>
          
          

        </View>
        <View  style={{flex:0.1}}/>
        <View style={{width:"100%", marginTop:20, flex:0.4}}>
          <TextInput
          mode="flat"
          // label="Outlined input"
          keyboardType='phone-pad'
          returnKeyLabel='send'
          returnKeyType='send'
          style={{backgroundColor:"#fff"}}
          onChangeText={setCode}
          placeholder="+91-9876543210"
          // right={<TextInput.Affix text="/100" />}
          />
         

        </View>
        <View style={{width:"100%", flex:0.5}}>
          <TouchableOpacity style={[{width:"100%", height: 40, borderRadius:20, backgroundColor:"#3474f5"}, {alignItems:"center", justifyContent:"center"}]} onPress={signInWithPhoneNumber}>
            <CTextCustom style={{color:"#fff"}}>
               Sign In
            </CTextCustom>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Welcome

const styles = StyleSheet.create({
  container: {
    backgroundColor:"#fff",
    height: SCREEN_HEIGHT
  },
  

})