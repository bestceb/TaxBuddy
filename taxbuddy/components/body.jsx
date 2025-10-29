import { Text, View, StyleSheet, TouchableOpacity, } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


import Feather from '@expo/vector-icons/Feather';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';




const HistoryBoby = ({whenPressed, value1, value2, value3, value4, myMonth, myYear, whenPressed2, }) =>{

  const arrowLeftIcon = <Feather name="arrow-left" size={24} color={'#000'} />
  const arrowDropDownIcon = <MaterialIcons name="arrow-drop-down" size={24} color={'#ffffff'} />
  const nairaIcon = <FontAwesome6 name="naira-sign" size={20} color={'#8e67e9ff'} />



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



                <View style={mystyles.style6}>
                        <TouchableOpacity style={mystyles.style6Sub} >
                              <Text style={mystyles.style6Text} >{myMonth}</Text>
                              {arrowDropDownIcon}
                        </TouchableOpacity>
                </View>

                <View style={mystyles.style6}>
                        <TouchableOpacity style={mystyles.style6Sub} >
                              <Text style={mystyles.style6Text} >{myYear}</Text>
                              {arrowDropDownIcon}
                        </TouchableOpacity>
                </View>
                      


                

                











                  
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
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 15,
  },

  style2Text1:{
    fontSize: 17,
    color: '#7c7777ff',
    marginBottom: 15,
  },

  style2Text2:{
    fontSize: 28,
    fontWeight: 'bold',
  },

  style3:{
    backgroundColor: "#e4dfdfff",
    marginVertical: 20,
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 15,
  },

  style3Text1:{
    fontSize: 17,
    color: '#7c7c77ff',
    marginBottom: 15,
  },

  style3Text2:{
    fontSize: 28,
    color: '#c0760dff',
    fontWeight: 'bold',
  },

  style4:{
    backgroundColor: "#ccc",
    marginVertical: 20,
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 15,
  },

  style4Text1:{
    fontSize: 17,
    color: '#7c7c77ff',
    marginBottom: 15,
  },

  style4Text2:{
    fontSize: 28,
    color: '#86540dff',
    fontWeight: 'bold',
  },

  style5:{
    backgroundColor: "#e2ddf7ff",
    marginVertical: 20,
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 15,
  },

  style5Text1:{
    fontSize: 17,
    color: '#79777cff',
    marginBottom: 15,
  },

  style5Sub:{
    flexDirection: "row",
    alignItems: 'center',
  },

  style5Text2:{
    fontSize: 28,
    color: '#8e67e9ff',
    fontWeight: 'bold',
  },

  style6:{
    backgroundColor: '#c97808ff',
    marginVertical: 5,
    borderRadius: 10,
    paddingVertical: 10,
  },

  style6Sub:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  style6Text:{
    fontSize: 14,
    color: '#ffffff',
    paddingRight: 5,

  }


})







export default HistoryBoby;