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
import FontAwesome from '@expo/vector-icons/FontAwesome';









const historyPaid = () =>{




  const arrowLeftIcon = <Feather name="arrow-left" size={24} color={'#000'} />

  const homeIcon = <Ionicons name="home-outline" size={24} color={'#948e8eff'} /> 
  const calculatorIcon = <Ionicons name="calculator-outline" size={24} color={'#948e8eff'} /> 
  const historyIcon = <MaterialIcons name="access-time-filled" size={24} color={'#999123ff'} />
  const historyIcon2 = <MaterialIcons name="access-time" size={24} color={'#948e8eff'} />

  const alertIcon = <Ionicons name="notifications-outline" size={24} color={'#948e8eff'} /> 
  const alertIcon2 = <Ionicons name="notifications-sharp" size={24} color={'#948e8eff'} />
  const profileIcon = <FontAwesome name="user-circle" size={24} color={'#948e8eff'} /> 
  const nairaIcon = <FontAwesome6 name="naira-sign" size={12} color={'#1a1716'} letterSpacing={-.2} />
  
  const checkCircleIcon = <Ionicons name="checkmark-circle-outline" size={20} color={'#f9fafb'} />








let total = 1;
let paid = 1;
let unPaid = 0;
let paidAmount = 0;

let income = 500000;
let taxAmount = 100000;
let taxRate = 20.00;

let month = 'Month';
let year = 2025;

  return (


      <SafeAreaView style={mystyles.container}>

                <MyHeader
                    whenPressed={() =>{}}
                />

        <ScrollView style={mystyles.container2}>

                    <HistoryBody 
                        value1={total}
                        value2={paid}
                        value3={unPaid}
                        value4={taxAmount}

                        whenPressed={() =>{}}
                        myMonth={month}
                        myYear={year}
                    />


                    <View style={mystyles.style1} >

                          <View style={mystyles.sub}>
                                <Text style={mystyles.text1}>October 2025</Text>
                                <Text style={mystyles.text2}>Paid</Text>
                          </View>

                          <View style={mystyles.sub2}>

                                <View style={{gap: 8,}}>
                                    <Text style={mystyles.text3}>Income</Text>
                                    <View style={mystyles.sub3}>
                                            {nairaIcon}
                                            <Text style={mystyles.text3}>{income}</Text>
                                    </View>
                                </View>

                                <View style={{gap: 8,}}>
                                    <Text style={mystyles.text3}>Tax Amount</Text>
                                    <View style={mystyles.sub4}>
                                            {nairaIcon}
                                            <Text style={mystyles.text3}>{taxAmount}</Text>
                                    </View>
                                </View>

                                
                                
                          </View>


                          <View style={mystyles.sub5}>
                                <View style={{gap: 8}}>
                                    <Text style={mystyles.text3}>Tax Rate</Text>
                                    <View>
                                            <Text style={mystyles.text3}>{taxRate}%</Text>
                                    </View>
                                </View>
                                <View style={{gap: 8}}>
                                    <Text style={{fontSize: 16, color: '#1a1716', alignSelf: 'flex-end'}}>Paid On</Text>
                                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                        <Text style={mystyles.text3}>10</Text>
                                        <Text style={mystyles.text3}>/</Text>
                                        <Text style={mystyles.text3}>23</Text>
                                        <Text style={mystyles.text3}>/</Text>
                                        <Text style={mystyles.text3}>2025</Text>
                                    </View>
                                    
                                </View>
                          </View>

                          <View style={mystyles.sub2}>
                            
                                

                                

                          </View>

                          
                    </View>

                

        </ScrollView>



        <View style={mystyles.footerStyle}>
                <MyFooter renderIcon icon={homeIcon} label={'Home'} />
                <MyFooter renderIcon icon={calculatorIcon} label={'Calculate'} />
                <MyFooter renderIcon icon={historyIcon} label={'History'} />
                <MyFooter whenPressed={()=>{router.push('notification')}} renderIcon icon={alertIcon} label={'Alerts'} />
                <MyFooter whenPressed={()=>{router.push('profile-settings1')}} renderIcon icon={profileIcon} label={'Profile'} />

        </View>




      </SafeAreaView>
  );
}


const mystyles = StyleSheet.create({

  container:{
    flex: 1,
  },

  container2:{
    marginHorizontal: 15,
    marginVertical: 20,
  },

  style1:{
    backgroundColor: '#ffffff',
    marginTop: 60,
    marginVertical: 10,
    paddingVertical: 15,
    //paddingHorizontal: 16,
    borderRadius: 20,
    borderWidth: .8,
    borderColor: '#afa9a9ff',

  },

  sub:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 45,
    paddingHorizontal: 16,

  },

  text1:{
    fontSize: 24,
    fontWeight: 500,
    letterSpacing: -.15,
    lineHeight: 30,
    color: '#212121'
  },

  text2:{
    fontSize: 16,
    lineHeight: 24, 
    color: '#ff0000'
  },

  sub2:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 16,
  },

  sub3:{
    flexDirection: 'row',
    alignItems: 'center',
  },

  sub4:{
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-end'
  },

  text3:{
    fontSize: 16,
    color: '#1a1716',
  },

  sub5:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 16,
    marginVertical: 8,
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



export default historyPaid;