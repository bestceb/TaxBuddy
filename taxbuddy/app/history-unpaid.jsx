import { Text, View, StyleSheet, ScrollView, TouchableOpacity, } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { useState } from "react";
import { Dropdown } from 'react-native-element-dropdown'


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




const data = [
  {label: 'January', selectedMonth: '1'},
  {label: 'February', selectedMonth: '2'},
  {label: 'March', selectedMonth: '3'},
  {label: 'April', selectedMonth: '4'},
  {label: 'May', selectedMonth: '5'},
  {label: 'June', selectedMonth: '6'},
  {label: 'July', selectedMonth: '7'},
  {label: 'August', selectedMonth: '8'},
  {label: 'September', selectedMonth: '9'},
  {label: 'October', selectedMonth: '10'},
  {label: 'November', selectedMonth: '11'},
  {label: 'December', selectedMonth: '12'},
]

const data2 = [
  {label: '2025', selectedYear: '1'},
  {label: '2024', selectedYear: '2'},
  {label: '2023', selectedYear: '3'},
  {label: '2022', selectedYear: '4'},
  {label: '2021', selectedYear: '5'},
  {label: '2020', selectedYear: '6'},
  {label: '2019', selectedYear: '7'},
  {label: '2018', selectedYear: '8'},
  {label: '2017', selectedYear: '9'},
  {label: '2016', selectedYear: '10'},
  {label: '2015', selectedYear: '11'},
  {label: '2014', selectedYear: '12'},
]



const historyUnpaid = () =>{




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
  const arrowDropDownIcon = <MaterialIcons name="arrow-drop-down" size={24} color={'#F9FAFB'} right={120} />




    const [selectedMonth, setSelectedMonth] = useState(null);
    const [selectedYear, setSelectedYear] = useState(2025);




let total = 1;
let paid = 0;
let unPaid = 1;
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
                        value4={paidAmount}

                        whenPressed={() =>{}}
                        myMonth={month}
                        myYear={year}
                    />

                    <View>
                                        <Dropdown
                                                    data={data}
                                                    labelField={'label'}
                                                    placeholder="Month"
                                                    placeholderStyle={{textAlign: 'center', color: '#F9FAFB'}}
                                                    selectedMonth={'label'}
                                                    onChange={item => setSelectedMonth(item.selectedMonth)}
                                                    style={mystyles.style6}
                                                    renderRightIcon={() =>(arrowDropDownIcon)}
                                                    selectedTextStyle={{textAlign: 'center', color: '#F9FAFB'}}
                                                    
                                        />
                                    </View>
                    
                                    <View>
                                        <Dropdown
                                                      data={data2}
                                                      labelField={'label'}
                                                      placeholder="Month"
                                                      placeholderStyle={{textAlign: 'center', color: '#F9FAFB'}}
                                                      selectedMonth={'label'}
                                                      onChange={item => setSelectedYear(item.selectedYear)}
                                                      style={mystyles.style6}
                                                      renderRightIcon={() =>(arrowDropDownIcon)}
                                                      selectedTextStyle={{textAlign: 'center', color: '#F9FAFB'}}
                                                      
                                        />
                                    </View>


                    <View style={mystyles.style1} >

                          <View style={mystyles.sub}>
                                <Text style={mystyles.text1}>October 2025</Text>
                                <Text style={mystyles.text2}>Unpaid</Text>
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


                          <View style={{gap: 8, marginHorizontal: 16, marginVertical: 8}}>
                                    <Text style={mystyles.text3}>Tax Rate</Text>
                                    <View>
                                            <Text style={mystyles.text3}>{taxRate}%</Text>
                                    </View>
                          </View>

                          <View style={mystyles.sub2}>
                            
                                

                                

                          </View>

                          <MyButton2
                                  whenPressed={() =>{router.push('history-mark-paid')}} 
                                  renderIcon icon={checkCircleIcon}
                                  label={'Mark as Paid'}
                          />
                    </View>

                

        </ScrollView>



        <View style={mystyles.footerStyle}>
                        <MyFooter whenPressed={()=>{router.push('home')}} source={require('../assets/images/home1.png')} label={'Home'} />
                        <MyFooter whenPressed={()=>{router.push('calculate')}} source={require('../assets/images/calculator1.png')} label={'Calculate'} />
                        <MyFooter source={require('../assets/images/history2.png')} label={'History'} />
                        <MyFooter whenPressed={()=>{router.push('notification')}} source={require('../assets/images/alert1.png')} label={'Alerts'} />
                        <MyFooter whenPressed={()=>{router.push('profile-settings1')}} source={require('../assets/images/profile1.png')}  label={'Profile'} />
        
        </View>




      </SafeAreaView>
  );
}


const mystyles = StyleSheet.create({

  container:{
    flex: 1,
    backgroundColor: "#E8F3E5"
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

  style6:{
    backgroundColor: '#f76d1b',
    marginVertical: 8,
    borderRadius: 10,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    
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



export default historyUnpaid;