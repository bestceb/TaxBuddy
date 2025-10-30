import { Stack } from "expo-router";
import { useState, useEffect } from "react";



import Splash from "./splash";



export default function RootLayout() {

const [showSplash, setShowSplash] = useState(true);

useEffect(() =>{
  setTimeout(() =>{
    setShowSplash(false);
  }, 2000)
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
          <Stack.Screen name="history"/>

    </Stack>
  );
}
