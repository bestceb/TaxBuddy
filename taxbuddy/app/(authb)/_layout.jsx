import { Stack } from "expo-router";


export default function AuthLayoutB (){
    return(
        <Stack screenOptions={{headerShown: false}}>

            <Stack.Screen name="sign-in-business"/>
            <Stack.Screen name="sign-up-business"/>
            <Stack.Screen name="emailVerification-business"/>
            <Stack.Screen name="forgotPassword-business"/>
            <Stack.Screen name="pass-emailVerif-business"/>
            <Stack.Screen name="resetPassword-business"/>


        </Stack>
    )
}