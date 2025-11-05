import React from "react";
import { View, Text, ScrollView, StyleSheet, TextInput, TouchableOpacity,  } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { useState } from "react";



import MainHeader from "../../components/mainHeader";
import MyButton4 from "../../components/button4";
import MyButton2 from "../../components/button2";
import MyFooter from "../../components/footer";



// Icons
import Feather from '@expo/vector-icons/Feather';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';



const profileSettings1 = () =>{


      const arrowDropDownIcon = <MaterialIcons name="arrow-drop-down" size={24} color={'#ffffff'} />
      const toggleOffIcon = <MaterialIcons name="toggle-off" size={40} color={'#21212140'} />
      const toggleOnIcon = <MaterialIcons name="toggle-on" size={40} color={'#367E34'} />

       const arrowLeftIcon = <Feather name="arrow-left" size={24} color={'#000'} />
       const calendarIcon = <SimpleLineIcons name="calendar" size={55} color={'#15010680'} />

       const homeIcon = <Ionicons name="home-outline" size={24} color={'#948e8eff'} /> 
       const calculatorIcon = <Ionicons name="calculator-outline" size={24} color={'#948e8eff'} /> 
       const historyIcon = <MaterialIcons name="access-time" size={24} color={'#948e8eff'} />
        const historyIcon2 = <MaterialIcons name="access-time" size={24} color={'#948e8eff'} />
        const alertIcon = <Ionicons name="notifications-outline" size={24} color={'#948e8eff'} /> 
        const alertIcon2 = <Ionicons name="notifications-sharp" size={24} color={'#948e8eff'} />
        const profileIcon = <FontAwesome name="user-circle-o" size={24} color={'#999123ff'} /> 

    
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

                <View  style={mystyles.style1}>

                    <Text style={mystyles.text1}>Account Information</Text>

                    <View>
                            <Text style={mystyles.text2}>Account Type</Text>
                            <Text style={mystyles.text3}>Individual</Text>
                            <Text style={mystyles.text4}>Account type cannot be changed</Text>

                    </View>

                    <View>
                            <Text style={mystyles.text2}>Full Name</Text>
                            <Text style={mystyles.text3}>Samuel James</Text>

                    </View>

                    <MyButton4
                        label={'Select Range'}
                        whenPressed={()=>{}}
                        renderIcon icon={arrowDropDownIcon}
                    />

                    <View>
                            <Text style={mystyles.text2}>Tax Identification Number</Text>
                            <TextInput 
                                style={mystyles.text3}
                                placeholder="Enter your TIN" 
                            />

                    </View>


                </View>

                <View style={mystyles.style2}>

                        <Text style={mystyles.text5}>Account Security</Text>
                        <TouchableOpacity onPress={()=>{router.push('profile-settings2')}}>
                                <Text style={{fontSize: 16, fontWeight: 500}}>Change Password</Text>
                        </TouchableOpacity>
                </View>

                <View style={mystyles.style3}>

                        <Text style={mystyles.text5}>Preferences</Text>
                        <View style={mystyles.style4}>
                            <Text style={mystyles.text6}>Tax Payment Reminders</Text>
                            <TouchableOpacity onPress={handleToggle}>
                                {isToggled ? toggleOffIcon : toggleOnIcon}
                            </TouchableOpacity>
                        </View>

                        <Text style={mystyles.text7}>Get notified about upcoming tax payment due dates</Text>

                </View>

                <View style={{gap: 24}}>
                    <TouchableOpacity style={mystyles.style5} onPress={()=>{}} >
                                    <Text style={mystyles.text8} >Save Changes</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={mystyles.button} onPress={()=>{}} >
                                    <Text style={mystyles.buttonText} >Logout</Text>
                    </TouchableOpacity>
                </View>

                <View style={mystyles.style6}>

                    <Text style={mystyles.text9}>About Tax Compliance</Text>
                    <Text style={mystyles.text10}>This app uses the official FIRS (Federal Inland Revenue Service) tax rates for Nigeria. Always consult with a tax professional for specific tax advice and ensure timely payment of your tax obligations.</Text>

                </View>
                


            </ScrollView>



            <View style={mystyles.footerStyle}>
                            <MyFooter renderIcon icon={homeIcon} label={'Home'} />
                            <MyFooter renderIcon icon={calculatorIcon} label={'Calculate'} />
                            <MyFooter whenPressed={()=>{router.push('history')}} renderIcon icon={historyIcon} label={'History'} />
                            <MyFooter whenPressed={()=>{router.push('notification')}} renderIcon icon={alertIcon} label={'Alerts'} />
                            <MyFooter whenPressed={()=>{}} renderIcon icon={profileIcon} label={'Profile'} />
            
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
        height: 531,
        gap: 32,
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
        marginBottom: 11,
    },

    text3:{
        height: 40,
        borderWidth: 1,
        borderColor: '#212121BF',
        borderRadius: 4,
        paddingVertical: 10,
        paddingHorizontal: 16,
        marginBottom: 4,
    },

    text4:{
        color: '#F76D1B'
    },

    style2:{
        height: 174,
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderRadius: 20,
        paddingVertical: 32,
        paddingHorizontal: 16,
        borderColor: '#21212140',
        marginBottom: 48,
        gap: 32
    },

    text5:{
        fontSize: 24,
        fontWeight: 500,
        color: '#212121',
    },

    style3:{
        height: 206,
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderRadius: 20,
        paddingVertical: 32,
        paddingHorizontal: 16,
        borderColor: '#21212140',
        marginBottom: 32,
    },

    text6:{
        fontSize: 16,
        fontWeight: 500,
        color: '#212121',
    },

    style4:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 25
    },

    text7:{
        fontSize: 16,
        color: '#212121',
        width: 244,
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
        gap: 10,

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

  style6:{
    backgroundColor: '#FEF0E8',
    height: 224,
    borderRadius: 20,
    marginVertical: 56,
    padding: 16,
    gap: 24,
  },

  text9:{
    fontSize: 20,
    fontWeight: 500,
    color: '#212121',
  },

  text10:{
    fontSize: 16,
    color: '#212121BF'
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




export default profileSettings1;