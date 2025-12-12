import React from "react";
import { View, Text, ScrollView, StyleSheet, TextInput, TouchableOpacity,  } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { useState } from "react";



import MainHeader from "../../components/mainHeader";
import MyButton4 from "../../components/button4";
import MyButton2 from "../../components/button2";
import MyFooter from "../../components/footer";



const bProfileSettings2 = () =>{


    
    const [isToggled, setIsToggled] = useState(false);

    const handleToggle = () =>{
        setIsToggled(!isToggled)
    }

    return(

        <SafeAreaView style={mystyles.container}>

            <MainHeader
                label={'Profile & Settings'}
                label2={'Manage your account information, security and preferences'}
            />


            <ScrollView style={mystyles.container2}>

                        <View style={mystyles.style1}>

                            <Text style={mystyles.text1}>Password Reset</Text>
                            <Text style={mystyles.text2}>Enter your email address below to receive a link to reset your password. Please ensure the email is associated with your Secure Tax Tracker account.</Text>
                            
                            
                            <View style={mystyles.style2}>
                                <Text style={mystyles.text3}>Email Address</Text>

                                <TextInput
                                    style={mystyles.textInput}
                                    placeholder="your.email@example.com"
                                    placeholderTextColor={'#6b6969bf'}

                                />
                            </View>


                            <View style={{gap: 24}}>
                                                <TouchableOpacity style={mystyles.style5} onPress={()=>{}} >
                                                                <Text style={mystyles.text8} >Send Reset Instructions</Text>
                                                </TouchableOpacity>
                            
                                                <TouchableOpacity style={mystyles.button} onPress={()=>{}} >
                                                                <Text style={mystyles.buttonText} >Back to Login</Text>
                                                </TouchableOpacity>
                            </View>


                        </View>



            </ScrollView>


            <View style={mystyles.footerStyle}>
                            <MyFooter whenPressed={()=>{router.push('home-b')}} source={require('../../assets/images/home1.png')} label={'Home'} />
                            <MyFooter whenPressed={()=>{router.push('calculate-b')}} source={require('../../assets/images/calculator1.png')} label={'Calculate'} />
                            <MyFooter whenPressed={()=>{router.push('B-history')}} source={require('../../assets/images/history1.png')} label={'History'} />
                            <MyFooter whenPressed={()=>{router.push('b-notification')}} source={require('../../assets/images/alert1.png')} label={'Alerts'} />
                            <MyFooter whenPressed={()=>{}} source={require('../../assets/images/profile2.png')} label={'Profile'} />
            
            </View>


        </SafeAreaView>

    )

}


const mystyles = StyleSheet.create({
    container:{
        flex: 1,
    },

    container2:{
        marginHorizontal: 16,
        marginTop: 20,
    },

    style1:{
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderColor: '#15010640',
        borderRadius: 20,
        paddingHorizontal: 16,
        paddingVertical: 32,
        height: 435,
        //gap: 32,
        marginTop: 40,
        marginBottom: 48,
    },

    text1:{
        fontSize: 24,
        fontWeight: 500,
        lineHeight: 30,
        letterSpacing: -.15,
    },

    text2:{
        color: '#212121',
        lineHeight: 20,
        //width: 321,
        marginHorizontal: 18,
        marginVertical: 15,

    },

    style2:{
        marginVertical: 10,
    },

    text3:{
        lineHeight: 20,
        color: '#212121',
        marginBottom: 11,
    },

    textInput:{
        height: 40,
        borderWidth: 1,
        borderColor: '#1A171640',
        borderRadius: 4,
        paddingVertical: 10,
        paddingHorizontal: 16,
        marginBottom: 32,
    },

    style5:{
        backgroundColor: '#367E34',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 48,
        paddingVertical: 14,
        paddingHorizontal: 24,
        borderRadius: 8,
        gap: 17,

    },

    text8:{
        textAlign: 'center',
        fontSize: 14,
        fontWeight: 400,
        color: '#f9fafb'

    },

    button:{
        borderWidth: 1,
        borderColor: '#367E34',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 48,
        paddingVertical: 14,
        paddingHorizontal: 24,
        borderRadius: 8,
    },

    buttonText:{
        textAlign: 'center',
        fontSize: 14,
        fontWeight: 400,
        color: '#367E34',
        lineHeight: 20,
  },

    footerStyle:{
        flexDirection: 'row',
        paddingHorizontal: 15,
        paddingVertical: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: '#E5E7EB',
        backgroundColor: '#ffffff'
    }

})


export default bProfileSettings2;