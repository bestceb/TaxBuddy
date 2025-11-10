import { Dimensions, Text, View, StyleSheet, TouchableOpacity, Image, ScrollView,  } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";


import MainHeader from "../../components/mainHeader";
import MyFooter from "../../components/footer";



// Icons
import Feather from '@expo/vector-icons/Feather';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import FontAwesome from '@expo/vector-icons/FontAwesome';


const bNotification = () =>{



  const arrowLeftIcon = <Feather name="arrow-left" size={24} color={'#000'} />

  const homeIcon = <Ionicons name="home-outline" size={24} color={'#948e8eff'} /> 
  const calculatorIcon = <Ionicons name="calculator-outline" size={24} color={'#948e8eff'} /> 
  const historyIcon = <MaterialIcons name="access-time" size={24} color={'#948e8eff'} />

  const alertIcon = <Ionicons name="notifications-outline" size={64} color={'#948e8eff'} /> 
  const alertIcon2 = <Ionicons name="notifications-sharp" size={24} color={'#367E34'} />
  const profileIcon = <FontAwesome name="user-circle" size={24} color={'#948e8eff'} /> 
  const nairaIcon = <FontAwesome6 name="naira-sign" size={12} color={'#1a1716'} letterSpacing={-.2} />
  
  const checkCircleIcon = <Ionicons name="checkmark-circle-outline" size={20} color={'#f9fafb'} />







    return(


        <SafeAreaView style={mystyles.container}>
            
            <MainHeader
                whenPressed={()=>{}}
                label={'Notifications'}
                label2={'All caught up!'}
            />


                <ScrollView>
                    <View style={mystyles.style1}>

                            {alertIcon}
                            <Text style={mystyles.style2}>No notifications yet</Text>
                            <Text style={mystyles.style2}>You'll see tax reminders and updates here</Text>

                    </View>
                    
                        {/* Temporal */}
                    <TouchableOpacity onPress={()=>{router.push('b-notification2')}} style={{backgroundColor: 'blue', width: 40, height: 40, borderRadius: 20, position: 'absolute', top: 100, alignSelf: 'center'}}>
                            <Text style={{alignSelf: 'center', color: 'white', fontWeight: 900, fontSize: 18}}>B</Text>
                    </TouchableOpacity>



                </ScrollView>




                    <View style={mystyles.footerStyle}>
                        <MyFooter whenPressed={()=>{router.push('home-b')}} source={require('../../assets/images/home1.png')} label={'Home'} />
                        <MyFooter whenPressed={()=>{router.push('calculate-b')}} source={require('../../assets/images/calculator1.png')} label={'Calculate'} />
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
        backgroundColor: '#ffffff',
        marginHorizontal: 16,
        //width: 370,
        height: 356,
        top: 150,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#1A171640',
        gap: 32,
    },

    style2:{
        color: '#212121BF',
        fontSize: 16,
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





export default bNotification;