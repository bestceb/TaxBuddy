
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from "react-native";


const {width, height} = Dimensions.get('screen');

const MyButton = ({label, whenPressed}) =>{


    return(

        <View>
                <TouchableOpacity style={mystyles.container} onPress={whenPressed} >
                                 <Text style={mystyles.textStyle} >{label}</Text>
                 </TouchableOpacity>
        </View>
        
    )
}


const mystyles = StyleSheet.create({
    container:{
        backgroundColor: '#367E34',
        width: 330,
        height: 48,
        paddingVertical: 14,
        marginHorizontal: 16,
        borderRadius: 8

    },

    textStyle:{
        textAlign: 'center',
        fontSize: 14,
        fontWeight: 400,
        color: '#f9fafb'

    }
})



export default MyButton;