import { Stack } from "expo-router";
import { useState, useEffect } from "react";



import Splash from "./splash";



export default function RootLayout() {

const [showSplash, setShowSplash] = useState(true);

useEffect(() =>{
  setTimeout(() =>{
    setShowSplash(false);
  }, 300)
})

if(showSplash){
  return <Splash/>
}

  return(
    <Stack screenOptions={{headerShown: false}} >

          <Stack.Screen name="onboarding1"/>
          <Stack.Screen name="onboarding2"/>
          <Stack.Screen name="onboarding3"/>
          <Stack.Screen name="choose-account"/>
          <Stack.Screen name="(auth)"/>
          <Stack.Screen name="history"/>
          <Stack.Screen name="history-unpaid"/>
          <Stack.Screen name="history-mark-paid"/>
          <Stack.Screen name="history-paid"/>
          <Stack.Screen name="(notification)"/>
          <Stack.Screen name="(profile-settings)"/>
          

    </Stack>
  );
}
