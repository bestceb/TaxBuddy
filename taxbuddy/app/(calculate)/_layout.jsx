import { Stack } from "expo-router";


export default function BNotificationLayout (){
    return(
        <Stack screenOptions={{headerShown: false}}>

            <Stack.Screen name="calculate"/>

        </Stack>
    )
}