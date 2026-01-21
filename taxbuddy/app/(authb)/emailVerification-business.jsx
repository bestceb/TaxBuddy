
import { View, Text, ActivityIndicator, Image, StyleSheet, TextInput, TouchableOpacity, Dimensions, Keyboard, Animated } from "react-native";
import React, {Component, createRef} from "react";
import { useState, useRef, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";


const codeLength = 4;


const {width, height} = Dimensions.get('screen');

const EmailVerificationBusiness = () =>{

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

    const charWidth = 10;
    const animatedWidth = useRef(new Animated.Value(0)).current;

    useEffect(() => {
      const targetWidth = code.length * charWidth + (code.length > 0 ? 10 : 0);
      Animated.timing(animatedWidth, {
        toValue: targetWidth,
        duration: 150,
        useNativeDriver: false,
      }).start();
    }, [code, animatedWidth]);



  return (

        <SafeAreaView style={myStyles.container}>

                
                    
            <TouchableOpacity onPress={()=>{ router.back('./sign-up-business')}}>
                    <Image style={myStyles.image1} source={require('../../assets/images/back2.png')}/>
            </TouchableOpacity>



            <View style={{backgroundColor: '#fff', flex: 1}}>

                <View style={{top: 30}}>
                    <Text style={myStyles.text2}>Verify Code</Text>
                    <Text style={myStyles.text3}>Pelease enter the code sent to your email</Text>
                    <Text style={[myStyles.text3, {color: COLORS.primary}]}>business@email.com</Text>
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
                    <Animated.View style={[myStyles.movingBorder, {width: animatedWidth}]}/>
                </View>


                <Text style={myStyles.bottomText}>Didn't recieve a OTP?</Text>
                <TouchableOpacity>
                    <Text style={[myStyles.bottomText, {color: COLORS.primary}]}>Resend code</Text>
                </TouchableOpacity>


                <TouchableOpacity
                    style={myStyles.button /*, loading && myStyles.buttonDisabled]*/}

                    onPress={() =>{}}
                >
                    <Text style={{color: '#F9FAFB' }}>Verify</Text>
                </TouchableOpacity>

















            </View>






        </SafeAreaView>
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
    backgroundColor: COLORS.white
  },

  

  image1:{
    marginTop: 50,
      width: 16,
      height: 16,
      marginHorizontal: 16,
  },

  text2:{
    color: COLORS.muted,
    textAlign: 'center',
    fontWeight: 500,
    fontSize: 24,
    lineHeight: 30,
    letterSpacing: -.15,
    marginBottom: 20,
  },

  text3:{
    color: '#00000080',
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 24,
  },

  input:{
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 58,
    gap: 5,
    marginBottom: 32,
    //marginTop: 
  },

  inputCircle:{
    width: 48,
    height: 48,
    borderWidth: 1,
    borderColor: '#21212140',
    borderRadius: 30,
    fontSize: 20,
    color: '#000000',
    textAlign: 'center',

  },

 movingBorder:{
    height: 2,
    backgroundColor: COLORS.primary,
    position: 'absolute',
    bottom: 0,
    left: 0
 },

  bottomText:{
    textAlign: 'center',
    fontSize: 16,
    color: '#00000080',
    lineHeight: 24
  },

  bottomText2:{
    color: COLORS.primary,
    textAlign: 'center'
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


export default EmailVerificationBusiness;