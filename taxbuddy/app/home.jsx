import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  Image,
  //ProgressBarAndroid,
} from 'react-native';


import MyFooter from '../components/footer';



import { Ionicons, Feather, MaterialCommunityIcons } from '@expo/vector-icons';





export default function Index() {
  const [month, setMonth] = useState('Month');
  const [year, setYear] = useState('2026');

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#E8F3E5" />
      <ScrollView contentContainerStyle={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.welcome}>Welcome,</Text>
            <Text style={styles.username}>Samuel James</Text>
            <Text style={styles.subtitle}>Individual account</Text>
          </View>
          <TouchableOpacity style={styles.notifyIcon}>
            <Image style={{width: 48, height: 48}} source={require('../assets/images/bell.png')} />
          </TouchableOpacity>
        </View>

        {/* Selectors */}
        <TouchableOpacity style={styles.selector}>
          <Text style={styles.selectorText}>{month}</Text>
          <Feather name="chevron-down" size={16} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.selector}>
          <Text style={styles.selectorText}>{year}</Text>
          <Feather name="chevron-down" size={16} color="#fff" />
        </TouchableOpacity>

        {/* Tax Status Overview */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Tax Status Overview</Text>
          
          <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16}}>
                <Text style={styles.detailLabel}>Paid Taxes</Text>
                <Text style={styles.percent}>0%</Text>
          </View>
          <View style={styles.progressContainer}>
            {/* <ProgressBarAndroid styleAttr="Horizontal" progress={0.0} color="green" /> */}
          </View>
          

            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16, marginTop: 32}}>
                <Text style={styles.detailLabel}>Unpaid Taxes</Text>
                <Text style={styles.percent}>0%</Text>
          </View>          
          <View style={styles.progressContainer}>
            {/* <ProgressBarAndroid styleAttr="Horizontal" progress={0.0} color="red" /> */}
          </View>
        </View>

        {/* Quick Actions */}
        <Text style={styles.sectionTitle}>Quick Actions</Text>
        <View style={styles.quickActions}>
          <TouchableOpacity style={styles.quickCard}>
            <Image style={styles.quickIcon2} source={require('../assets/images/calculatorC.png')} />
            <Text style={styles.quickText}>Tax Calculator</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.quickCard}>
            <Image style={styles.quickIcon} source={require('../assets/images/historyC.png')} />
            <Text style={styles.quickText}>Tax History</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.quickCard}>
            <Image style={{width: 22, height: 26}} source={require('../assets/images/alertC.png')} />
            <Text style={styles.quickText}>Notifications</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.quickCard}>
            <Image style={styles.quickIcon} source={require('../assets/images/profileC.png')} />
            <Text style={styles.quickText}>Profile & Settings</Text>
          </TouchableOpacity>
        </View>

        {/* Summary */}
        <View style={styles.summaryCard}>
            <Image style={styles.iconContainer} source={require('../assets/images/total.png')} />
            <Text style={styles.summaryLabel}>Total Income</Text>
            <Text style={styles.summaryValue}>₦0</Text>
        </View>

        <View style={styles.summaryCard}>
          <Image style={styles.iconContainer} source={require('../assets/images/payable.png')} />
          <Text style={styles.summaryLabel}>Tax Payable</Text>
          <Text style={styles.summaryValue}>₦0</Text>
        </View>

        <View style={styles.summaryCard}>
          <Image style={styles.iconContainer} source={require('../assets/images/unpaid.png')} />
          <Text style={styles.summaryLabel}>Unpaid</Text>
          <Text style={styles.summaryValue}>₦0</Text>
        </View>

        <View style={styles.summaryCard}>
          <Image style={styles.iconContainer} source={require('../assets/images/paid.png')} />
          <Text style={styles.summaryLabel}>Paid</Text>
          <Text style={styles.summaryValue}>₦0</Text>
        </View>
      </ScrollView>

      {/* Bottom Nav */}
      <View style={styles.footerStyle}>
                            <MyFooter source={require('../assets/images/home2.png')} label={'Home'} />
                            <MyFooter whenPressed={()=>{router.push('calculate')}} source={require('../assets/images/calculator1.png')} label={'Calculate'} />
                            <MyFooter whenPressed={()=>{router.push('history')}} source={require('../assets/images/history1.png')} label={'History'} />
                            <MyFooter whenPressed={()=>{router.push('notification')}} source={require('../assets/images/alert1.png')} label={'Alerts'} />
                            <MyFooter whenPressed={()=>{router.push('profile-settings1')}} source={require('../assets/images/profile1.png')}  label={'Profile'} />
            
      </View>

      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#E8F3E5' },
  container: { padding: 16, paddingBottom: 10 },
  header: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 32 },
  welcome: { fontSize: 16, color: '#333' },
  username: { fontSize: 24, fontWeight: 500, lineHeight: 30, letterSpacing: -.15, color: '#000' },
  subtitle: { fontSize: 12, color: '#000000' },
  notifyIcon: {
    backgroundColor: '#D5EBD3',
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selector: {
    flexDirection: 'row',
    backgroundColor: '#F76D1B',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    paddingHorizontal: 24,
    paddingVertical: 14,
    marginBottom: 16,
  },
  selectorText: { color: '#F9FAFB', },
  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 16,
    marginTop: 32,
    marginBottom: 56
  },
  cardTitle: { fontSize: 24, fontWeight: 500, color: '#212121', lineHeight: 30, letterSpacing: -.15, marginBottom: 48 },
  detailLabel: { fontSize: 16, color: '#212121BF' },
  progressContainer: { height: 8, borderRadius: 4, backgroundColor: '#eee', overflow: 'hidden'},
  percent: { fontSize: 16, color: '#212121BF',},

  sectionTitle: { 
    fontSize: 16, 
    fontWeight: 500, 
    color: '#212121', 
    marginBottom: 16
  },

  quickActions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 40
  },
  quickCard: {
    width: '48%',
    height: 135,
    backgroundColor: '#fff',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#21212140',
    gap: 16
  },

  quickIcon:{
    width: 24,
    height: 24,
  },
  
  quickIcon2:{
    width: 21,
    height: 26,
  },

  quickText: { marginTop: 6, color: '#212121' },

  summaryCard: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 16,
    marginBottom: 32,
    borderWidth: 1,
    borderColor: '#21212140',
    height: 194,
    gap: 32
  },

  summaryLabel: { 
    color: '#212121', 
    fontSize: 16 
  },

  summaryValue: { 
    fontSize: 32, 
    fontWeight: 500, 
    lineHeight: 38, 
    letterSpacing: -.2 , 
    color: '#000'
  },

  iconContainer: {
    width: 48,
    height: 48,
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

  /*
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 65,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
  },
  navItem: { alignItems: 'center' },
  navText: { color: 'green', fontSize: 12, marginTop: 3 },
  navTextInactive: { color: 'gray', fontSize: 12, marginTop: 3 },
*/
});
        