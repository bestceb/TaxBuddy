import { Dimensions, Text, View, StyleSheet, TouchableOpacity, Image,  } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";




const signIn = () =>{



    return(


        <SafeAreaView style={mystyles.container}>
            

            <View style={mystyles.style1}>
                    <Image style={mystyles.imageStyle} source={require('../../assets/images/app-logo.png')} />
                    <Text style={mystyles.style2} >Hi welcome back, you've been missed login to your account</Text>

            </View>





        </SafeAreaView>



    );
}


const mystyles = StyleSheet.create({

    container:{
        flex: 1,
        backgroundColor: '#ffffff'
    },

    style1:{
        marginTop: 30,
        alignItems: 'center',
    },

    imageStyle:{
        width: 162,
        height: 63,
        marginBottom: 8,
    },

    style2:{
        textAlign: 'center',
        color: '#367e34',
        lineHeight: 20,
        marginHorizontal: 70,
    },
})





export default signIn;