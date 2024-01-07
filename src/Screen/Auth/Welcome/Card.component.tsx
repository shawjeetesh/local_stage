import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { FC } from 'react'
import CTextCustom from '../../../Components/CText/CText.Custom'
import colors from '../../../Global/Styles/colors.global'
import  { GetStartedCardState } from './data.static'
import { SCREEN_HEIGHT, fontPixel, heightPixel } from '../../../Utility/normalizer'
import LinearGradient from 'react-native-linear-gradient';

type CardProps = {
    item: GetStartedCardState
    index:number;
}

const Card:FC<CardProps> = (props) => {
    const {item, index} = props;
  return (
    <View style={[styles.mainContainer]}>
      <LinearGradient 
      angle={180}
      useAngle={true}
      colors={item.backgroundColor} style={{flex:1}}>

        <View style={styles.headerContain}>
          <CTextCustom style={[styles.headerText, {color:item.textColor}]}>{item.title}</CTextCustom>
        </View>
        <View style={styles.bgContainer}>
          <Image source={item.image} style={[styles.bgImage, item?.imageStyle]} />
        </View>
      </LinearGradient>
        
      </View>
  )
}

export default React.memo(Card)
const styles = StyleSheet.create({
    mainContainer: { position: "relative", flex: 1,
    height:SCREEN_HEIGHT,
    backgroundColor: colors.light_green
},
    headerContain:{ position: "absolute", top: SCREEN_HEIGHT>700?"10%":"4%", alignItems: "center", width: "100%", zIndex:10,},
    headerText:{ fontSize: fontPixel(44), textAlign: "center", color: colors.black },
    bgContainer:{ flex: 1, justifyContent: "center", zIndex:1, alignItems: "center", transform:[{translateY:heightPixel(SCREEN_HEIGHT>700 ? SCREEN_HEIGHT*0.08: 0)}] },
    bgImage:{ height: "50%", width: "100%", resizeMode: "contain", minHeight:(375) },
   
})