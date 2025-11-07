import { Text, View, StyleSheet, TouchableOpacity, } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Picker } from '@react-native-picker/picker';
import { Dropdown } from 'react-native-element-dropdown'

import { useState } from "react";


import Feather from '@expo/vector-icons/Feather';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';




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



const HistoryBoby = ({whenPressed, value1, value2, value3, value4, myMonth, myYear, whenPressed2, }) =>{

  const arrowLeftIcon = <Feather name="arrow-left" size={24} color={'#000'} />
  const arrowDropDownIcon = <MaterialIcons name="arrow-drop-down" size={24} color={'#F9FAFB'} right={120} />
  const nairaIcon = <FontAwesome6 name="naira-sign" size={20} color={'#0000ff'} letterSpacing={-.2} />


    const [selectedMonth, setSelectedMonth] = useState(null);
    const [selectedYear, setSelectedYear] = useState(2025);
  


    return(

        <View style={mystyles.container}>

                <View style={mystyles.style2} >
                      <Text style={mystyles.style2Text1} >Total Records</Text>
                      <Text style={mystyles.style2Text2} >{value1}</Text>
                </View>

                <View style={mystyles.style3} >
                      <Text style={mystyles.style3Text1} >Paid</Text>
                      <Text style={mystyles.style3Text2} >{value2}</Text>
                </View>

                <View style={mystyles.style4} >
                      <Text style={mystyles.style4Text1} >Unpaid</Text>
                      <Text style={mystyles.style4Text2} >{value3}</Text>
                </View>

                <View style={mystyles.style5} >
                      <Text style={mystyles.style5Text1} >Paid Amount</Text>
                      <View style={mystyles.style5Sub}>
                            {nairaIcon}
                            <Text style={mystyles.style5Text2} >{value4}</Text>
                      </View>
                </View>


{/* 
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
                       */}


                

                











                  
        </View>

    )
}



const mystyles = StyleSheet.create({

  container:{
    //marginVertical: 10

  },

  style2:{
    backgroundColor: "#ffffff",
    marginVertical: 20,
    borderRadius: 20,
    //width: 370,
    height: 110,
    padding: 16,
    gap: 16
  },

  style2Text1:{
    fontSize: 16,
    lineHeight: 24,
    color: '#212121 75%',
    gap: 16
  },

  style2Text2:{
    fontSize: 32,
    fontWeight: 500,
    lineHeight: 38,
    letterSpacing: -.2,
    color: '#212121 75%',

  },

  style3:{
    backgroundColor: "#d4e8d3",
    marginVertical: 20,
    borderRadius: 20,
    //width: 370,
    height: 110,
    padding: 16,
    gap: 16
  },

  style3Text1:{
    fontSize: 16,
    lineHeight: 24,
    color: '#212121 75%',
    gap: 16
  },

  style3Text2:{
    fontSize: 32,
    fontWeight: 500,
    lineHeight: 38,
    letterSpacing: -.2,
    color: '#367e34',
  },

  style4:{
    backgroundColor: "#ffcccc",
    marginVertical: 20,
    borderRadius: 20,
    //width: 370,
    height: 110,
    padding: 16,
    gap: 16
  },

  style4Text1:{
    fontSize: 16,
    lineHeight: 24,
    color: '#a45565',
    gap: 16
  },

  style4Text2:{
    fontSize: 32,
    fontWeight: 500,
    lineHeight: 38,
    letterSpacing: -.2,
    color: '#ff0000',
  },

  style5:{
    backgroundColor: "#e6e6ff",
    marginVertical: 20,
    borderRadius: 20,
    //width: 370,
    height: 110,
    padding: 16,
    gap: 16
  },

  style5Text1:{
    fontSize: 16,
    lineHeight: 24,
    color: '#212121 75%',
    gap: 16
  },

  style5Sub:{
    flexDirection: "row",
    alignItems: 'center',
  },

  style5Text2:{
    fontSize: 32,
    fontWeight: 500,
    lineHeight: 38,
    letterSpacing: -.2,
    color: '#0000ff',
  },

  style6:{
    backgroundColor: '#f76d1b',
    marginVertical: 8,
    borderRadius: 10,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    
  },

 

  style6Text:{
    fontSize: 14,
    color: '#f9fafb',
    paddingRight: 5,

  }


})







export default HistoryBoby;