import { Dimensions, Text, View, StyleSheet, TouchableOpacity, Image, ScrollView,  } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";


import MainHeader from "../../components/mainHeader";
import MyButton3 from "../../components/buttons3";
import MyMessage from "../../components/new-message";
import MyFooter from "../../components/footer";



// Icons
import Feather from '@expo/vector-icons/Feather';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import FontAwesome from '@expo/vector-icons/FontAwesome';


const bNotification2 = () =>{



  const arrowLeftIcon = <Feather name="arrow-left" size={24} color={'#000'} />

  const homeIcon = <Ionicons name="home-outline" size={24} color={'#948e8eff'} /> 
  const calculatorIcon = <Ionicons name="calculator-outline" size={24} color={'#948e8eff'} /> 
  const historyIcon = <MaterialIcons name="access-time" size={24} color={'#948e8eff'} />

  const alertIcon = <Ionicons name="notifications-outline" size={64} color={'#948e8eff'} /> 
  const alertIcon2 = <Ionicons name="notifications-sharp" size={24} color={'#367E34'} />
  const profileIcon = <FontAwesome name="user-circle" size={24} color={'#948e8eff'} /> 
  const nairaIcon = <FontAwesome6 name="naira-sign" size={12} color={'#1a1716'} letterSpacing={-.2} />
  
  const checkCircleIcon = <Ionicons name="checkmark-circle-outline" size={20} color={'#f9fafb'} />





let total = 0;
let paid = 0;
let unPaid = 0;
let paidAmount = 0;

let year = 2025;
let month = 'October';
let month2 = 10;
let day = 23;

let hour = 7;
let min = 30;
let sec = 22;

let pm = 'PM';
let am = 'AM';

    return(


        <SafeAreaView style={mystyles.container}>
            
            <MainHeader
                whenPressed={()=>{}}
                label={'Notifications'}
                label2={'All caught up!'}
            />


                <ScrollView>

                    <MyButton3
                        whenPressed1={()=>{router.back('notification')}}
                        label={'Mark all as read'}
                        
                        whenPressed2={()=>{router.back('notification')}}
                        label2={'Delete'}
                    />

                    <MyMessage 
                        label1={'New'}
                        label2={'Mark as Read'}

                        label3={'Tax record for ' + month + ' ' + year + ' saved successfully'}
                        label4={month2 + '/' + day + '/' + year + ', ' + hour + ':' + min + ':' + sec + ' ' + pm}
                    />



                    <View style={mystyles.style1}>
                        <Text style={mystyles.text1}>About Notifications</Text>
                        <Text style={mystyles.text2}>Notifications help you stay on top of your tax obligations. Enable reminders in your profile settings to get alerts about upcoming due dates.</Text>
                    </View>

                </ScrollView>




                    <View style={mystyles.footerStyle}>
                        <MyFooter source={require('../../assets/images/home1.png')} label={'Home'} />
                        <MyFooter source={require('../../assets/images/calculator1.png')} label={'Calculate'} />
                        <MyFooter whenPressed={()=>{router.push('B-history')}} source={require('../../assets/images/history1.png')} label={'History'} />
                        <MyFooter source={require('../../assets/images/alert2.png')} label={'Alerts'} />
                        <MyFooter whenPressed={()=>{router.push('b-profile-settings1')}} source={require('../../assets/images/profile1.png')} label={'Profile'} />

                    </View>




        </SafeAreaView>



    );
}


const mystyles = StyleSheet.create({

    container:{
        flex: 1,
    },

    style1:{
        backgroundColor: '#FEF0E8',
        marginHorizontal: 16,
        //width: 370,
        height: 176,
        borderRadius: 20,
        padding: 16,
        gap: 24,
        marginTop: 96,

    },

    text1:{
        fontWeight: 500,
        fontSize: 20,
        color: '#212121'
    },

    text2:{
        fontSize: 16,
        color: '#212121BF',
    },

    footerStyle:{
        flexDirection: 'row',
        paddingHorizontal: 15,
        paddingVertical: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#ffffff'
  }
})





export default bNotification2;