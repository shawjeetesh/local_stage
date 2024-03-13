import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import NavigationRoot from './Navigation.Root';
import AuthStack from './Auth.Stack';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import MainStack from './MainStack/Main.Stack';

const Routes = () => {
  const [userId, setUserId] = useState('');
  async function onAuthStateChanged(user: FirebaseAuthTypes.User | null) {
    if (user) {
      console.log('User', user);
      console.log('res', await auth().currentUser?.getIdToken());
      setUserId(user.uid);
      return;
      // Some Android devices can automatically process the verification code (OTP) message, and the user would NOT need to enter the code.
      // Actually, if he/she tries to enter it, he/she will get an error message because the code was already used in the background.
      // In this function, make sure you hide the component(s) for entering the code and/or navigate away from this screen.
      // It is also recommended to display a message to the user informing him/her that he/she has successfully logged in.
    }
    setUserId('');
  }

  useEffect(() => {
    // auth().signOut();
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  return (
    <NavigationRoot>{userId ? <MainStack /> : <AuthStack />}</NavigationRoot>
  );
};

export default Routes;

const styles = StyleSheet.create({});
