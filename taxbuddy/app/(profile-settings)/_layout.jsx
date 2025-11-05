import { Stack } from "expo-router";


export default function ProfileSettingsLayout (){
    return(
        <Stack screenOptions={{headerShown: false}}>

            <Stack.Screen name="profile-settings1"/>
            <Stack.Screen name="profile-settings2"/>

        </Stack>
    )
}