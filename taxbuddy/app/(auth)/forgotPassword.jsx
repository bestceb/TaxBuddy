
import { View, Text, ActivityIndicator, Image, StyleSheet, TextInput, TouchableOpacity, Dimensions } from "react-native";

import { useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";



const {width, height} = Dimensions.get('screen');


export default function ForgotPassword({ navigation }) {
  

  return (

        <View style={myStyles.container}>

            <View style={{backgroundColor: '#fff'}}>
                <Image style={myStyles.image} source={require('../../assets/images/forgotPass.png')}/>
                
                <View style={myStyles.backContainer}>
                    
                    <TouchableOpacity onPress={()=>{ router.back('./sign-in')}}>
                            <Image style={myStyles.image2} source={require('../../assets/images/back.png')}/>
                    </TouchableOpacity>
                    <Text style={myStyles.text1}>Forgot Password</Text>

                </View>

            </View>



            <View style={{backgroundColor: '#fff', flex: 1}}>

                <View style={{top: 30}}>
                    <Text style={myStyles.text2}>Email Address Here</Text>
                    <Text style={myStyles.text3}>Enter the email address associated with your account.</Text>
                    <Text style={myStyles.text4}>Email</Text>

                    <TextInput
                            //value={email}
                            //onChangeText={(t) => setEmail(t)}
                            placeholder="you@example.com"
                            keyboardType="email-address"
                            placeholderTextColor={'#6b6969bf'}
                            autoCapitalize="none"
                            autoCorrect={false}
                            returnKeyType="next"
                            //onSubmitEditing={() => passwordRef.current?.focus()}
                            style={[myStyles.input1 /*, errors.email && styles.inputError*/]}
                            //accessible
                           // accessibilityLabel="Email"
                        />



                        <TouchableOpacity
                            style={myStyles.button /*, loading && myStyles.buttonDisabled]*/}

                            onPress={() =>{router.push('./pass-emailVerif')}}
                        >
                            <Text style={[myStyles.buttonText, { color: '#F9FAFB' }]}>Reset Password</Text>
                        </TouchableOpacity>
                </View>















            </View>






        </View>
  );
}

const COLORS = {
  bg: "#f7f8fb",
  primary: "#367E34",
  text: "#0f172a",
  muted: "#212121",
  danger: "#dc2626",
  white: "#fff",
};




const myStyles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: COLORS.primary
  },

  image:{
    width: '100%',
    height: height*.28
  },

  backContainer:{
    flexDirection: 'row', 
    position: 'absolute',
    alignItems: 'center',
    marginHorizontal: 16,
    top: 78,
    gap: 24
  },

  image2:{
    width: 16,
    height: 16
  },

  text1:{
    fontWeight: 500,
    fontSize: 24,
    lineHeight: 30,
    letterSpacing: -.15,
    color: '#ffffff'
  },

  text2:{
    color: COLORS.primary,
    textAlign: 'center',
    fontWeight: 500,
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 8,
  },

  text3:{
    color: '#00000080',
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 24,
    marginHorizontal: width*.16,
    marginBottom: 8,
  },

  text4:{
    color: '#212121',
    fontSize: 16,
    lineHeight: 24,
    marginHorizontal: 16,
    marginBottom: 11,
  },

  input1: {
    height: 46,
    borderWidth: 1,
    borderColor: "#e6e9ee",
    borderRadius: 8,
    paddingHorizontal: 12,
    marginHorizontal: 16,
    backgroundColor: "#fff",
    color: COLORS.text,
    backgroundColor: '#2121211A',
    fontSize: 16,
  },

  button: {
    marginTop: 40,
    marginHorizontal: 16,
    height: 48,
    borderRadius: 10,
    backgroundColor: COLORS.primary,
    alignItems: "center",
    justifyContent: "center",
  },

  buttonText: { 
    color: COLORS.white, 
  },
  buttonDisabled: { opacity: 0.7 },


  

});
