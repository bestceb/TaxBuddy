
import { View, Text, ActivityIndicator, Image, StyleSheet, TextInput, TouchableOpacity, Dimensions, Keyboard } from "react-native";
import React, {Component, createRef} from "react";
import { useState, useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";


const codeLength = 4;


const {width, height} = Dimensions.get('screen');

const PassEmailVerification = () =>{

    const [code, setCode] = useState(Array(codeLength).fill(''));
    const [secure, setSecure] = useState(true);

    //Create refs for each input box
    const inputRefs = useRef([]);
    inputRefs.current = [...Array(codeLength)].map(
        (_, i) => inputRefs.current[i] ?? React.createRef()
    );

    const handleTextChange = (text,index) =>{
        const newCode = [...code];
        // Ensure only the last typed character is kept if the user pastes
        newCode[index] = text.length > 1 ? text.slice(-1) : text;
        setCode(newCode);

        // Auto-focus to the next input field if a character was entered and we aren't at the end
        if (text.length === 1 && index < (codeLength - 1))
            inputRefs.current[index + 1].current.focus();
    };

    const handleKeyPress = (e, index) =>{
        // If backspace is pressed and the current input is empty, focus the previous input
        if (e.nativeEvent.key === 'Backspace' && index > 0 && code[index] === '')
            inputRefs.current[index - 1].current.focus();
    };

    const isCodeComplete = code.every(char => char !== '');



  return (

        <View style={myStyles.container}>

            <View style={{backgroundColor: '#fff'}}>
                <Image style={myStyles.image} source={require('../../assets/images/forgotPass.png')}/>
                
                <View style={myStyles.backContainer}>
                    
                    <TouchableOpacity onPress={()=>{ router.back('./forgotPassword')}}>
                            <Image style={myStyles.image2} source={require('../../assets/images/back.png')}/>
                    </TouchableOpacity>
                    <Text style={myStyles.text1}>Email Verification</Text>

                </View>

            </View>



            <View style={{backgroundColor: '#fff', flex: 1}}>

                <View style={{top: 30}}>
                    <Text style={myStyles.text2}>Get Your Code</Text>
                    <Text style={myStyles.text3}>Kindly enter the 4 digit code sent to your email address.</Text>
                </View>


                <View style={myStyles.input}>
                    {code.map((digit, index) => (
                        <TextInput
                            key={index}
                            ref={inputRefs.current[index]}
                            style={myStyles.inputCircle}
                            keyboardType="number-pad"
                            maxLength={1}
                            onChangeText={(text) => handleTextChange(text, index)}
                            onKeyPress={(e) => handleKeyPress(e, index)}
                            value={digit}
                            textAlign="center"
                            autoFocus={index === 0} // Autofocus the first box on load
                            //selectionColor={'#007aff'}
                            caretHidden={true}
                            secureTextEntry={secure}
                            onSubmitEditing={() =>{
                                if (isCodeComplete){
                                    Keyboard.dismiss();
                                }
                            }}
                        />
                    ))}

                </View>

















            </View>






        </View>
  );
};



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
    marginHorizontal: width*.2,
    marginBottom: 8,
  },

  input:{
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 48,
    gap: 5,
  },

  inputCircle:{
    width: 48,
    height: 48,
    borderWidth: 1,
    borderColor: '#21212140',
    borderRadius: 30,
    fontSize: 20,
    color: '#000',
    textAlign: 'center',
    //padding: 10

  }
  

});


export default PassEmailVerification;