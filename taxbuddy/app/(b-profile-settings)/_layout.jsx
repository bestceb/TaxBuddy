import { Stack } from "expo-router";


export default function BProfileSettingsLayout (){
    return(
        <Stack screenOptions={{headerShown: false}}>

            <Stack.Screen name="b-profile-settings1"/>
            <Stack.Screen name="b-profile-settings2"/>

        </Stack>
    )
}