import { Text, View, StyleSheet, TouchableOpacity, } from "react-native";


import Feather from '@expo/vector-icons/Feather';



const MyHeader = ({whenPressed}) =>{

  const arrowLeftIcon = <Feather name="arrow-left" size={24} color={'#000'} />


    return(


                <View style={mystyles.style1} >
                      <View style={mystyles.style1Sub}>
                            <TouchableOpacity onPress={whenPressed} >
                                {arrowLeftIcon}
                            </TouchableOpacity>

                            <Text style={mystyles.sub1Text}>Tax History</Text>
                      </View>
                      
                      <Text style={mystyles.style1Text} >Track and manage your tax payment records</Text>
                </View>

    )

}


const mystyles = StyleSheet.create({

  style1:{
    paddingHorizontal: 15,
    marginBottom: 15, 
  },

  style1Sub:{
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,

  },

  sub1Text:{
    fontSize: 24,
    marginLeft: 20
  },

  style1Text:{
    fontSize: 17,
    color: '#7c7777ff'
  },

})




export default MyHeader;