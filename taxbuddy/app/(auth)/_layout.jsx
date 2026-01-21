import { Stack } from "expo-router";


export default function AuthLayout (){
    return(
        <Stack screenOptions={{headerShown: false}}>

            <Stack.Screen name="sign-in"/>
            <Stack.Screen name="signUp-individual"/>
            <Stack.Screen name="emailVerification"/>
            <Stack.Screen name="forgotPasword"/>
            <Stack.Screen name="pass-emailVerif"/>
            <Stack.Screen name="resetPassword"/>


        </Stack>
    )
}