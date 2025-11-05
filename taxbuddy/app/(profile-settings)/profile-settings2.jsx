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



const profileSettings2 = () =>{


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

        <SafeAreaView>

        </SafeAreaView>

    )

}




export default profileSettings2;