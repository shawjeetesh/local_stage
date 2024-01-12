import {View, Text, StyleSheet, Image} from 'react-native';
import React, {FC} from 'react';
import {RootStackParamList} from '../../../Routes/Auth.Stack';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import CTextCustom from '../../../Components/CText/CText.Custom';
import colors from '../../../Global/Styles/colors.global';
import {fontPixel} from '../../../Utility/normalizer';
type Props = NativeStackScreenProps<RootStackParamList, 'OTPVerification'>;
interface OTPVerificationProps {
  route: Props['route'];
  navigation: Props['navigation'];
}
const OTPVerification: FC<OTPVerificationProps> = () => {
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
            source={require('../../../Assets/icons/welcome_second.png')}
            style={{
              height: 100,
              width: 100,
              resizeMode: 'contain',
            }}
          />
        </View>
      </View>
      <View style={{marginTop: 22}}>
        <CTextCustom style={styles.fontStyleHeading}>
          Enter your mobile number
        </CTextCustom>
      </View>
    </View>
  );
};
export default OTPVerification;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainHeadingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 50,
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
});
