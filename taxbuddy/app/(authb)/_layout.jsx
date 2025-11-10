import { Stack } from "expo-router";


export default function AuthLayoutB (){
    return(
        <Stack screenOptions={{headerShown: false}}>

            <Stack.Screen name="sign-in-business"/>
            <Stack.Screen name="sign-up-individual"/>


        </Stack>
    )
}