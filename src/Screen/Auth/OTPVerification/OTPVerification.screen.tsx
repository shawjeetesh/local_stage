import {View, Text, StyleSheet, Image, TextInput} from 'react-native';
import React, {FC} from 'react';
import {RootStackParamList} from '../../../Routes/Auth.Stack';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import CTextCustom from '../../../Components/CText/CText.Custom';
import colors from '../../../Global/Styles/colors.global';
import {fontPixel} from '../../../Utility/normalizer';
import Test from '../../Test';
import Assets from '../../../Global/Styles/images.global';
type Props = NativeStackScreenProps<RootStackParamList, 'OTPVerification'>;
interface OTPVerificationProps {
  route: Props['route'];
  navigation: Props['navigation'];
}
const OTPVerification: FC<OTPVerificationProps> = () => {
  // return <Test />;
  return (
    <View style={styles.container}>
      <View style={styles.mainHeadingContainer}>
        <View style={{flex: 2}}>
          <CTextCustom style={styles.fontStyle}>Verify Your Number</CTextCustom>
        </View>
        <View
          style={{
            flex: 2,
          }}>
          <Image
            source={Assets.phone_avatar}
            style={{
              height: fontPixel(130),
              width: fontPixel(130),
              resizeMode: 'contain',
            }}
          />
        </View>
      </View>
      <View style={{marginTop: '5%'}}>
        <CTextCustom style={styles.fontStyleHeading}>
          Enter your mobile number
        </CTextCustom>
      </View>
      <View style={styles.phoneContainer}>
        <View style={styles.conatryCodeContainer}>
          <Text style={styles.contryCodeText}>+91 </Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            keyboardType="numeric"
            placeholder="729-089-6805"
            placeholderTextColor={'#000'}
            style={styles.phoneInput}
          />
        </View>
      </View>
    </View>
  );
};
export default OTPVerification;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  mainHeadingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: '20%',
  },
  fontStyle: {
    textAlign: 'center',
    fontSize: fontPixel(34),
    color: colors.black,
  },
  fontStyleHeading: {
    textAlign: 'center',
    color: colors.black,
    fontSize: fontPixel(20),
  },
  conatryCodeContainer: {
    justifyContent: 'center',
    borderColor: '#000',
    borderRightWidth: 1,
  },
  contryCodeText: {
    fontSize: fontPixel(22),
    color: colors.black,
  },
  phoneContainer: {
    width: '80%',
    borderWidth: 1,
    paddingVertical: 2,
    height: 50,
    flexDirection: 'row',
  },
  phoneInput: {
    fontSize: fontPixel(22),
    textAlign: 'left',
    margin: 0,
  },
  inputContainer: {
    flex: 1,
    justifyContent: 'flex-start',
  },
});
