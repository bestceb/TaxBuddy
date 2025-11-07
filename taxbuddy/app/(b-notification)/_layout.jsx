import { Stack } from "expo-router";


export default function BNotificationLayout (){
    return(
        <Stack screenOptions={{headerShown: false}}>

            <Stack.Screen name="b-notification"/>
            <Stack.Screen name="b-notification2"/>

        </Stack>
    )
}