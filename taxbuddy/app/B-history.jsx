import { Text, View, StyleSheet, ScrollView, TouchableOpacity, } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState} from "react";
import { router } from "expo-router";
import { Picker } from '@react-native-picker/picker';
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





export default function BHistory() {


    const [selectedMonth, setSelectedMonth] = useState(null);
    const [selectedYear, setSelectedYear] = useState(2025);


  const arrowLeftIcon = <Feather name="arrow-left" size={24} color={'#000'} />
  const calendarIcon = <SimpleLineIcons name="calendar" size={55} color={'#15010680'} />

  const homeIcon = <Ionicons name="home-outline" size={24} color={'#948e8eff'} /> 
  const calculatorIcon = <Ionicons name="calculator-outline" size={24} color={'#948e8eff'} /> 
  const historyIcon = <MaterialIcons name="access-time-filled" size={24} color={'#999123ff'} />
  const historyIcon2 = <MaterialIcons name="access-time" size={24} color={'#948e8eff'} />
  const alertIcon = <Ionicons name="notifications-outline" size={24} color={'#948e8eff'} /> 
  const alertIcon2 = <Ionicons name="notifications-sharp" size={24} color={'#948e8eff'} />
  const profileIcon = <FontAwesome name="user-circle" size={24} color={'#948e8eff'} /> 
  const arrowDropDownIcon = <MaterialIcons name="arrow-drop-down" size={24} color={'#ffffff'} right={120} />






let total = 0;
let paid = 0;
let unPaid = 0;
let paidAmount = 0;

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


                    {/* <View>
                          <Text>Selected Language: {selectedMonth}</Text>
                          <Picker
                              selectedValue={selectedMonth}
                              onValueChange={(itemValue, itemIndex) => setSelectedMonth(itemValue)}
                              style={{height: 50, width: 150}}
                          >

                              <Picker.Item label="January" value={'1'} />
                              <Picker.Item label="Fabruary" value={'2'} />
                              <Picker.Item label="March" value={'3'} />
                              <Picker.Item label="April" value={'4'} />
                              <Picker.Item label="May" value={'5'} />
                              <Picker.Item label="June" value={'6'} />
                              <Picker.Item label="july" value={'7'} />
                          </Picker>
                    </View> */}


                    {/* <View>
                           <Text>Select Item: {value}</Text>
                          <Dropdown
                              data={data}
                              labelField={'label'}
                              placeholder="Month"
                              value={'label'}
                              onChange={item => setValue(item.value)}
                              style={{backgroundColor: '#34f3' ,margin: 16, height: 50, borderColor: 'gray', borderWidth: .5, borderRadius:8, paddingHorizontal: 8}}
                              renderRightIcon={() =>(arrowDropDownIcon)}
                          />
                    </View> */}

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
                          {calendarIcon}
                          <Text style={mystyles.style1Text}>Enter your income and tap calculate to view your tax breakdown</Text>
                          
                          <MyButton2
                                  whenPressed={() =>{router.push('B-history-unpaid')}} 
                                  label={'Calculate Your First Tax'}
                          />
                    </View>

                

        </ScrollView>



        <View style={mystyles.footerStyle}>
                <MyFooter source={require('../assets/images/home1.png')} label={'Home'} />
                <MyFooter source={require('../assets/images/calculator1.png')} label={'Calculate'} />
                <MyFooter source={require('../assets/images/history2.png')} label={'History'} />
                <MyFooter whenPressed={()=>{router.push('b-notification')}} source={require('../assets/images/alert1.png')} label={'Alerts'} />
                <MyFooter whenPressed={()=>{router.push('b-profile-settings1')}} source={require('../assets/images/profile1.png')}  label={'Profile'} />

        </View>




      </SafeAreaView>
  );
}


const mystyles = StyleSheet.create({

  container:{
    flex: 1,
  },

  container2:{
    marginHorizontal: 16,
    paddingVertical: 20,
  },

  style1:{
    backgroundColor: '#ffffff',
    marginTop: 60,
    marginVertical: 10,
    marginBottom: 30,
    paddingVertical: 55,
    borderRadius: 20,
    alignItems: 'center',
    borderWidth: .8,
    borderColor: '#afa9a9ff',
  },

  style1Text:{
    textAlign: 'center',
    fontSize: 16,
    marginVertical: 25,
    marginHorizontal: 20,
    color: '#212121BF'
  },

  style6:{
    backgroundColor: '#f76d1b',
    marginVertical: 8,
    borderRadius: 10,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    
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