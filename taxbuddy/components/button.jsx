
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
        backgroundColor: '#626d25ff',
        width: width*.84,
        paddingVertical: 15,
        borderRadius: 10

    },

    textStyle:{
        textAlign: 'center',
        fontSize: 17,
        color: '#ffffff'

    }
})



export default MyButton;