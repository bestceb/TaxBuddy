import { Text, View, StyleSheet, ScrollView, TouchableOpacity, } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

// Re-usable components
import MyHeader from "../components/header";
import HistoryBody from "../components/body";
import MyButton2 from "../components/button2";
import MyFooter from "../components/footer";



//icons
import Feather from '@expo/vector-icons/Feather';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';








const historyMarkPaid = () =>{




  const arrowLeftIcon = <Feather name="arrow-left" size={24} color={'#000'} />

  const homeIcon = <Ionicons name="home-outline" size={24} color={'#948e8eff'} /> 
  const calculatorIcon = <Ionicons name="calculator-outline" size={24} color={'#948e8eff'} /> 
  const historyIcon = <MaterialIcons name="access-time-filled" size={24} color={'#999123ff'} />
  const historyIcon2 = <MaterialIcons name="access-time" size={24} color={'#948e8eff'} />

  const alertIcon = <Ionicons name="notifications-outline" size={24} color={'#948e8eff'} /> 
  const alertIcon2 = <Ionicons name="notifications-sharp" size={24} color={'#948e8eff'} />
  const profileIcon = <FontAwesome6 name="user-circle" size={24} color={'#948e8eff'} />
  const nairaIcon = <FontAwesome6 name="naira-sign" size={12} color={'#717182'} letterSpacing={-.2} />
  







let total = 0;
let paid = 0;
let unPaid = 0;
let paidAmount = 2000000;

let month = 'Month';
let year = 2025;

  return (


      <SafeAreaView style={mystyles.container}>

                <MyHeader
                    whenPressed={() =>{}}
                />

        {/* <ScrollView style={mystyles.container2}> */}
                <View style={{marginHorizontal: 16}}>
                    <HistoryBody 
                        value1={total}
                        value2={paid}
                        value3={unPaid}
                        value4={paidAmount}

                        whenPressed={() =>{}}
                        myMonth={month}
                        myYear={year}
                    />

                </View>

                    <View style={mystyles.style1} >
                          <Text style={mystyles.text1}>Mark as Paid</Text>
                          <Text style={mystyles.text2}>Are you sure you want to mark this tax record as paid?</Text>
                          
                          <View style={{marginBottom: 16}}>
                                  <View style={mystyles.style2}>
                                        <Text style={mystyles.text3}>Period:</Text>
                                        <Text style={mystyles.text3}>{month}</Text>
                                        <Text style={mystyles.text3}>{year}</Text>
                                  </View>
                                  <View style={mystyles.style2}>
                                        <Text style={mystyles.text3}>Amount:</Text>
                                        {nairaIcon}
                                        <Text style={mystyles.text3}>{paidAmount}</Text>
                                  </View>  
                          </View>
                          
                          
                          <MyButton2
                                  whenPressed={() =>{router.push('history-paid')}}
                                  label={'Confirm Payment'}
                          />

                          <TouchableOpacity style={mystyles.button} onPress={()=>{router.back('history')}} >
                                              <Text style={mystyles.buttonText} >Cancel</Text>
                          </TouchableOpacity>
                    </View>

                

        {/* </ScrollView> */}



        {/* <View style={mystyles.footerStyle}>
                <MyFooter renderIcon icon={homeIcon} label={'Home'} />
                <MyFooter renderIcon icon={calculatorIcon} label={'Calculate'} />
                <MyFooter renderIcon icon={historyIcon} label={'History'} />
                <MyFooter renderIcon icon={alertIcon} label={'Alerts'} />
                <MyFooter renderIcon icon={profileIcon} label={'Profile'} />

        </View> */}




      </SafeAreaView>
  );
}


const mystyles = StyleSheet.create({

  container:{
    flex: 1,
    backgroundColor: '#1A17161A',
  },

  container2:{
    marginTop: 20,
  },

  style1:{
    backgroundColor: '#ffffff',
    marginTop: 60,
    paddingVertical: 118,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    alignItems: 'center',
    borderWidth: .8,
    borderColor: '#afa9a9ff',
    height: 594,
    position: 'absolute',
    top: 260,
  },

  text1:{
    fontSize: 24,
    fontWeight: 500,
    lineHeight: 30,
    letterSpacing: -.15,
    marginBottom: 24,

  },

  text2:{
    textAlign: 'center',
    fontSize: 16,
    color: '#717182',
    marginHorizontal: 30,
    marginBottom: 16,
  },

  text3:{
    fontSize: 16,
    textAlign: 'center',
    color: '#717182',
    marginRight: 5,
  },

  style2:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },

  button:{
    borderWidth: 1,
    borderColor: '#367E34',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    height: 48,
    paddingVertical: 14,
    paddingHorizontal: 24,
    marginHorizontal: 16,
    marginTop: 24,
    borderRadius: 8,
    gap: 10,
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
    backgroundColor: '#ffffff'
  }


})



export default historyMarkPaid;