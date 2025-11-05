import { Text, View, StyleSheet, TouchableOpacity, } from "react-native";


import Feather from '@expo/vector-icons/Feather';



const MainHeader = ({whenPressed, label, label2}) =>{

  const arrowLeftIcon = <Feather name="arrow-left" size={24} color={'#000'} />


    return(


                <View style={mystyles.style1} >
                      <View style={mystyles.style1Sub}>
                            <TouchableOpacity onPress={whenPressed} >
                                {arrowLeftIcon}
                            </TouchableOpacity>

                            <Text style={mystyles.sub1Text}>{label}</Text>
                      </View>
                      
                      <Text style={mystyles.style1Text} >{label2}</Text>
                </View>

    )

}


const mystyles = StyleSheet.create({

  style1:{
    width: 370,
    height: 70,
    left: 16,
    gap: 16,
  },

  style1Sub:{
    flexDirection: 'row',
    alignItems: 'center',
    //marginBottom: 16,
    width: 370,
    height: 30,
    gap: 24,


  },

  sub1Text:{
    fontSize: 24,
    marginLeft: 24,
    fontWeight: 500,
    lineHeight: 30,
    letterSpacing: -0.15,
  },

  style1Text:{
    fontSize: 17,
    color: '#4a5565'
  },

})




export default MainHeader;