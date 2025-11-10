import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";





const ChooseAccount = () =>{

    return(
        <SafeAreaView style={mystyles.container}>

            <Text style={mystyles.style1} >Choose Your Account Type</Text>
            <Text style={mystyles.style2}>Select whether you're managing personl taxes or tracking your business finances.</Text>

            <TouchableOpacity style={mystyles.style3} onPress={()=>{router.push('sign-in')}} >
                        <Image style={mystyles.style4} source={require('../assets/images/frame4.png')} />
                        <Text style={mystyles.style5} >Individual</Text>
                        <Text style={mystyles.style6}>Track personal income tax and stay compliant with FIRS regulations</Text>
            </TouchableOpacity>


            <TouchableOpacity style={mystyles.style7} onPress={()=>{router.push('sign-in-business')}}>
                        <Image style={mystyles.style4} source={require('../assets/images/business-card.png')} />
                        <Text style={mystyles.style5} >Business</Text>
                        <Text style={mystyles.style6}>Manage company income tax and track business tax obligation</Text>
            </TouchableOpacity>





        </SafeAreaView>
    );
}

const mystyles = StyleSheet.create({
    container:{
        flex: 1,
        paddingHorizontal: 16,
        backgroundColor: 'white',
    },

    style1:{
        marginTop: 30,
        fontSize: 24,
        fontWeight: 500,
        textAlign: 'center',
        marginBottom: 4
    },

    style2:{
        width: 299,
        fontSize: 16,
        textAlign: 'center',
        lineHeight: 24,
        color: '#212121BF'
        //marginHorizontal: 35,
    },

    style3:{
        alignItems: 'center',
        marginTop: 56,
        marginBottom: 32,
        borderWidth: 1,
        borderRadius: 20,
        borderColor: '#d8d1d1ff'
    },

    style4:{
        width: 96,
        height: 96,
        marginVertical: 16,
    },

    style5:{
        paddingBottom: 16,
        fontWeight: 500,
        fontSize: 24,
        color: '#212121'
    },

    style6:{
        marginBottom: 16,
        textAlign: 'center',
        fontSize: 16,
        color: '#212121BF',
        lineHeight: 24,
        paddingHorizontal: 25
    },

    style7:{
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 20,
        borderColor: '#d8d1d1ff'
    },

})


export default ChooseAccount;