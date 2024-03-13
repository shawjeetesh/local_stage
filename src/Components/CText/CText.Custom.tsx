import { StyleSheet, Text, TextProps, View } from 'react-native'
import React, { FC } from 'react'

interface CTextCustomProps extends TextProps{
  
}

const CTextCustom:FC<CTextCustomProps> = ({children, ...props}) => {
  return (
      <Text
      {...props}
      style={StyleSheet.compose(styles.default, props.style)}
      >{children}</Text>
  )
}

export default CTextCustom

const styles = StyleSheet.create({
  default:{

    // fontFamily: 'KiteOne-Regular',
  }
})