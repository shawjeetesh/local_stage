import React, { useState, useEffect } from 'react';
import { Button, TextInput } from 'react-native';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import ShowSplashMessage from '../Utility/flashMessage';

function Test() {
  // If null, no SMS has been sent
  const [confirm, setConfirm] = useState<FirebaseAuthTypes.ConfirmationResult>();

  // verification code (OTP - One-Time-Passcode)
  const [code, setCode] = useState('');

  // Handle login


  // Handle the button press
  async function signInWithPhoneNumber(phoneNumber:string) {
    const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
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

  if (!confirm) {
    return (
      <Button
        title="Phone Number Sign In"
        // onPress={() => signInWithPhoneNumber('+1 650-555-3434')}
        onPress={() => signInWithPhoneNumber('+91 987-654-3210')}
      />
    );
  }

  return (
    <>
      <TextInput value={code} onChangeText={text => setCode(text)} />
      <Button title="Confirm Code" onPress={() => confirmCode()} />
    </>
  );
}

export default Test