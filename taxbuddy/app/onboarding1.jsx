import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";


import MyButton from "../components/button";


const Onboarding1 = () =>{

    return(

        <SafeAreaView style={mystyles.container}>


            <View style={mystyles.headerStyle}>

                <Image style={mystyles.frame1Style} source={require('../assets/images/frame-1.png')} />
                <TouchableOpacity>
                    <Text style={mystyles.skipStyle} >Skip</Text>
                </TouchableOpacity>
            </View>


            <Image style={mystyles.centerImage} source={require('../assets/images/character1.png')} />


            <Text style={mystyles.bigText}>Make taxes less taxing</Text>

            <Text style={mystyles.smallText}>No hidden fees. No stress. Just smart, simple tax tracking with ease.</Text>

            <MyButton whenPressed={()=>{
                router.push('onboarding2')
            }} label={'Next'} />


        </SafeAreaView>
    );

}


const mystyles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white'
    },

    headerStyle:{
        flexDirection: 'row',
        marginTop: 30,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 16
    },

    frame1Style:{
        width: 51,
        height: 8
    },

    skipStyle:{
        fontWeight: 400,
        fontSize: 16,
    },

    centerImage:{
        width: 370,
        height: 334,
        marginVertical: 56
    },

    bigText:{
        textAlign: 'center',
        fontWeight: 700,
        fontSize: 24,
        marginBottom: 8
    },

    smallText:{
        textAlign: 'center',
        fontWeight: 400,
        fontSize: 15,
        marginHorizontal: 20,
        marginBottom: 32

    }

})



export default Onboarding1;