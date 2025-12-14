
import { View, Text, ActivityIndicator, Image, StyleSheet, TextInput, TouchableOpacity, Dimensions } from "react-native";

import { useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

// icon
import Ionicons from '@expo/vector-icons/Ionicons';


const {width, height} = Dimensions.get('screen');

const resetPassword = () => {
  
    const eyeIcon = <Ionicons name="eye-outline" size={24} color={'#948e8eff'} /> 
    const eyeOffIcon = <Ionicons name="eye-off-outline" size={24} color={'#948e8eff'} /> 
  
  const [secure, setSecure] = useState(true);
  const [secure2, setSecure2] = useState(true);

  return (

        <View style={myStyles.container}>

            <View style={{backgroundColor: '#fff'}}>
                <Image style={myStyles.image} source={require('../../assets/images/forgotPass.png')}/>
                
                <View style={myStyles.backContainer}>
                    
                    <TouchableOpacity onPress={()=> { router.back('./pass-emailVerif')}}>
                            <Image style={myStyles.image2} source={require('../../assets/images/back.png')}/>
                    </TouchableOpacity>
                    <Text style={myStyles.text1}>Reset Password</Text>

                </View>

            </View>



            <View style={{backgroundColor: '#fff', flex: 1}}>

                <View style={{top: 30}}>
                    <Text style={myStyles.text2}>Enter New Password</Text>
                    <Text style={myStyles.text3}>Your new password must be different from previosly used password.</Text>
                    
                    <Text style={myStyles.text4}>Password</Text>
                    <View style={myStyles.style1}>
                        <TextInput
                        //ref={passwordRef}
                        //value={password}
                        placeholder="••••••••"
                        placeholderTextColor={'#6b6969bf'}
                        secureTextEntry={secure}
                        //returnKeyType="done"
                        //onSubmitEditing={handleSignIn}
                        style={myStyles.input2}
                        //accessible
                        //accessibilityLabel="Password"
                        />
                        <TouchableOpacity style={{position: 'relative'}} onPress={() =>{
                            setSecure(!secure)
                        }}>
                            {secure ? eyeOffIcon : eyeIcon}
                        </TouchableOpacity>
                    </View>


                    <Text style={myStyles.text4}>Confirm Password</Text>

                    <View style={myStyles.style1}>
                        <TextInput
                        //ref={passwordRef}
                        //value={password}
                        placeholder="••••••••"
                        placeholderTextColor={'#6b6969bf'}
                        secureTextEntry={secure2}
                        //returnKeyType="done"
                        //onSubmitEditing={handleSignIn}
                        style={myStyles.input2}
                        //accessible
                        //accessibilityLabel="Password"
                        />
                        <TouchableOpacity style={{position: 'relative'}} onPress={() =>{
                            setSecure2(!secure2)
                        }}>
                            {secure2 ? eyeOffIcon : eyeIcon}
                        </TouchableOpacity>
                    </View>



                        <TouchableOpacity
                            style={myStyles.button}

                            onPress={() =>{}}
                        >
                            <Text style={myStyles.buttonText}>Continue</Text>
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

  
  buttonText: { 
      color: COLORS.white, 
    },
    
    style1:{
        flexDirection: 'row',
        marginHorizontal: 16,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#2121211A',
        borderWidth: 1,
        borderColor: "#e6e9ee",
        borderRadius: 8,
        height: 46,
        paddingHorizontal: 16,
        marginBottom: 32,
        
    },
    
    input2: {
        color: COLORS.text,
        fontSize: 16,
        width: '95%'
    },
    
    button: {
      marginTop: 20,
      marginHorizontal: 16,
      height: 48,
      borderRadius: 10,
      backgroundColor: COLORS.primary,
      alignItems: "center",
      justifyContent: "center",
    },
    
});


export default resetPassword;