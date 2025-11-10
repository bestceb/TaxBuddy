
import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { router } from "expo-router";

import MainHeader from "../../components/mainHeader";
import MyFooter from "../../components/footer";

import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Picker } from "@react-native-picker/picker"; // npm install @react-native-picker/picker
import { Dropdown } from "react-native-element-dropdown";


import MaterialIcons from '@expo/vector-icons/MaterialIcons';


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

const TaxCalculatorScreen = () => {
  const navigation = useNavigation();

  const [selectedMonth, setSelectedMonth] = useState('Month');
  const [selectedYear, setSelectedYear] = useState(2025);
  const [revenue, setRevenue] = useState("");

  const handleCalculate = () => {
    if (!revenue) {
      alert("Please enter your revenue first.");
      return;
    }

    // Simple example calculation
    const rate = 0.2;
    const payable = revenue * rate;

    navigation.navigate("TaxComplete", {
      totalIncome: Number(revenue),
      taxPayable: payable,
      taxRate: rate,
      taxBand: "Small Business CIT",
      month: `${selectedMonth} ${selectedYear}`,
    });
  };

    const arrowDropDownIcon = <MaterialIcons name="arrow-drop-down" size={24} color={'#ffffff'} right={116} />
  

  return (
    <SafeAreaView style={styles.safeArea}>

      <MainHeader 
        label={'Tax Calculator'}
        label2={'Calculate your tax obligations based on revenue'}
      />

      <ScrollView contentContainerStyle={styles.container}>
        

        {/* Enter Details */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Enter Details</Text>

          <View>
            <Dropdown
                        data={data}
                        labelField={'label'}
                        placeholder="Month"
                        placeholderStyle={{textAlign: 'center', color: '#F9FAFB'}}
                        selectedMonth={'label'}
                        onChange={item => setSelectedMonth(item.selectedMonth)}
                        style={styles.style6}
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
                          style={styles.style6}
                          renderRightIcon={() =>(arrowDropDownIcon)}
                          selectedTextStyle={{textAlign: 'center', color: '#F9FAFB'}}
                          
            />
        </View>

          <Text style={styles.inputLabel}>Annual Revenue (₦)</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder="Enter amount"
            value={revenue}
            onChangeText={setRevenue}
          />

          <TouchableOpacity style={styles.calculateButton} onPress={()=>{}}>
            <Ionicons name="calculator-outline" size={18} color="#fff" />
            <Text style={styles.calculateButtonText}>Calculate</Text>
          </TouchableOpacity>
        </View>

        {/* Tax Breakdown */}
        <View style={styles.breakdownCard}>
          <Text style={styles.sectionTitle}>Tax Breakdown</Text>

          <View style={styles.breakdownContent}>
            <Image style={{width: 64, height: 64, }} source={require('../../assets/images/calcBreak.png')} />
            <Text style={styles.breakdownText}>
              Enter your income and tap calculate to view your tax breakdown.
            </Text>
          </View>
        </View>

        {/* CIT Rates */}
        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>Nigerian CIT Rates</Text>
          <Text style={styles.infoText}>
            • Small Business (Revenue below ₦25M):{" "}
            <Text style={{ color: "#1E7D32" }}>20%</Text>{"\n"}
            • Medium/Large Business:{" "}
            <Text style={{ color: "#C62828" }}>30% CIT</Text>
          </Text>
        </View>
      </ScrollView>

      {/* Bottom Nav */}
      <View style={styles.footerStyle}>
                            <MyFooter whenPressed={()=>{router.push('home')}} source={require('../../assets/images/home1.png')} label={'Home'} />
                            <MyFooter source={require('../../assets/images/calculator2.png')} label={'Calculate'} />
                            <MyFooter whenPressed={()=>{router.push('history')}} source={require('../../assets/images/history1.png')} label={'History'} />
                            <MyFooter whenPressed={()=>{router.push('notification')}} source={require('../../assets/images/alert1.png')} label={'Alerts'} />
                            <MyFooter whenPressed={()=>{router.push('profile-settings1')}} source={require('../../assets/images/profile1.png')}  label={'Profile'} />
            
      </View>

    </SafeAreaView>
  );
};



const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#E9F3E9",
  },
  container: {
    padding: 16,
    paddingBottom: 50,
  },
  header: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 20,
  },
  backButton: {
    marginRight: 12,
    marginTop: 4,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
  },
  headerSubtitle: {
    fontSize: 13,
    color: "#666",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 16,
    marginBottom: 20,
    height: 380,
    borderWidth: 1,
    borderColor: '#15010640'
  },
  sectionTitle: {
    fontWeight: 500,
    marginBottom: 48,
    fontSize: 24,
    lineHeight: 30,
    letterSpacing: -.15,
  },

  style6:{
    backgroundColor: '#f76d1b',
    marginBottom: 16,
    borderRadius: 10,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
    
  },

  dropdown: {
    backgroundColor: "#FF7F32",
    borderRadius: 8,
    marginBottom: 10,
    overflow: "hidden",
  },
  inputLabel: {
    fontSize: 14,
    color: "#212121",
    marginBottom: 11,
    marginTop: 4,
    lineHeight: 20
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
    paddingVertical: 10,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
    marginBottom: 32,
    height: 40,
  },
  calculateButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#A0C59E",
    paddingVertical: 12,
    borderRadius: 8,
    height: 48,
  },
  calculateButtonText: {
    color: "#F9FAFB",
    marginLeft: 6,
    lineHeight: 20
  },
  breakdownCard: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 16,
    marginBottom: 72,
    borderWidth: 1,
    borderColor: '#1A171640',
    height: 336
  },
  breakdownContent: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 124,
  },
  breakdownText: {
    color: "#212121BF",
    fontSize: 16,
    textAlign: "center",
    marginTop: 10,
  },
  infoCard: {
    backgroundColor: "#FCEAEA",
    borderRadius: 20,
    padding: 16,
  },
  infoTitle: {
    fontWeight: 500,
    marginBottom: 24,
    fontSize: 20,
    lineHeight: 24
  },
  infoText: {
    fontSize: 16,
    color: "#212121BF",
    lineHeight: 24,
  },
  footerStyle:{
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
  },

  // bottomNav: {
  //   position: "absolute",
  //   bottom: 0,
  //   left: 0,
  //   right: 0,
  //   height: 70,
  //   backgroundColor: "#fff",
  //   borderTopWidth: 1,
  //   borderColor: "#eee",
  //   flexDirection: "row",
  //   justifyContent: "space-around",
  //   alignItems: "center",
  // },
  // navItem: {
  //   alignItems: "center",
  // },
  // navItemActive: {
  //   alignItems: "center",
  // },
  // navText: {
  //   fontSize: 12,
  //   marginTop: 2,
  // },
});


export default TaxCalculatorScreen;