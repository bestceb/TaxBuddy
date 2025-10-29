import { Text, View, StyleSheet, ScrollView, TouchableOpacity, } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

// Re-usable components
import MyHeader from "../components/header";
import HistoryBody from "../components/body";
import MyButton from "../components/button";
import MyFooter from "../components/footer";



//icons
import Feather from '@expo/vector-icons/Feather';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';








export default function Index() {




  const arrowLeftIcon = <Feather name="arrow-left" size={24} color={'#000'} />
  const calendarIcon = <SimpleLineIcons name="calendar" size={55} color={'#948e8eff'} />

  const homeIcon = <Ionicons name="home-outline" size={24} color={'#948e8eff'} /> 
  const calculatorIcon = <Ionicons name="calculator-outline" size={24} color={'#948e8eff'} /> 
  const historyIcon = <MaterialIcons name="access-time-filled" size={24} color={'#999123ff'} />
  const historyIcon2 = <MaterialIcons name="access-time" size={24} color={'#948e8eff'} />
  const alertIcon = <Ionicons name="notifications-outline" size={24} color={'#948e8eff'} /> 
  const alertIcon2 = <Ionicons name="notifications-sharp" size={24} color={'#948e8eff'} />
  const profileIcon = <FontAwesome6 name="user-circle" size={24} color={'#948e8eff'} /> 







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


                    <View style={mystyles.style1} >
                          {calendarIcon}
                          <Text style={mystyles.style1Text}>Enter your income and tap calculate to view your tax breakdown</Text>

                          <MyButton
                                  whenPressed={() =>{}} 
                                  label={'Calculate Your First Tax'}
                          />
                    </View>

                

        </ScrollView>



        <View style={mystyles.footerStyle}>
                <MyFooter renderIcon icon={homeIcon} label={'Home'} />
                <MyFooter renderIcon icon={calculatorIcon} label={'Calculate'} />
                <MyFooter renderIcon icon={historyIcon} label={'History'} />
                <MyFooter renderIcon icon={alertIcon} label={'Alerts'} />
                <MyFooter renderIcon icon={profileIcon} label={'Profile'} />

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
  },

  style1:{
    backgroundColor: '#ffffff',
    marginTop: 60,
    marginVertical: 10,
    paddingVertical: 55,
    borderRadius: 15,
    alignItems: 'center',
    borderWidth: .8,
    borderColor: '#ccc'

  },

  style1Text:{
    textAlign: 'center',
    fontSize: 18,
    marginVertical: 25,
    color: '#948e8eff'
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