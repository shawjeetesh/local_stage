import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { FC } from 'react'
import Assets from '../../../Global/Styles/images.global'
import * as Progress from 'react-native-progress';
import colors from '../../../Global/Styles/colors.global';
import LinearGradient from 'react-native-linear-gradient';

type ArrowBtnComponentProps = {
    pos: number;
    onClick: ()=> void;
}

const ArrowBtnComponent:FC<ArrowBtnComponentProps> = (props) => {
  return (
    <View style={styles.footerContainer}>
        <TouchableOpacity style={styles.footerArrowBtn} onPress={props.onClick}>
        <LinearGradient 
      angle={90}
      useAngle={true}
      locations={[0.3, 0.8]}
      colors={props.pos === 2 && [ "#00203F", "#603F83"] || ["#fff","#fff"]} style={{flex:1, justifyContent:"center", alignItems:"center", width:"100%",
        borderRadius:30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,

        elevation: 16,
      }}>
        <Image source={Assets.arrow_right_green} style={[styles.rightArrowImg, props.pos === 2 && {tintColor:colors.white}]} />
        <View style={{ position: "relative" }}>
        <View style={styles.progressContainer}>
           {props.pos !== 2 &&  <Progress.Circle size={60} progress={(props.pos+1) / 3}
            indeterminateAnimationDuration={800}
            animated
            unfilledColor='#fff'
            borderWidth={0}
            color={colors.maastricht_blue}
            
            >


            </Progress.Circle>}

        </View>

        </View>
        </LinearGradient>
        </TouchableOpacity>
  </View>
  )
}

export default ArrowBtnComponent

const styles = StyleSheet.create({
    footerContainer: { position: "absolute", bottom: "10%", alignItems: "center", width: "100%" },
    footerArrowBtn: {
        width: 60,
        height: 60,
        backgroundColor: "#fff",
        borderRadius: 30, 
        justifyContent: "center", 
        alignItems: "center",
     
        // overflow:"hidden",
    },
    rightArrowImg:{ height: 20, width: 40, resizeMode: "contain" },
    progressContainer: { position: "absolute", left: -30, top: -40 }

})