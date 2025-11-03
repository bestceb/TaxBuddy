
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from "react-native";


const {width, height} = Dimensions.get('screen');

const MyButton2 = ({label, whenPressed, renderIcon, icon}) =>{


    return(

        <View>
                <TouchableOpacity style={mystyles.container} onPress={whenPressed} >
                                {renderIcon ? icon : null}
                                 <Text style={mystyles.textStyle} >{label}</Text>
                 </TouchableOpacity>
        </View>
        
    )
}


const mystyles = StyleSheet.create({
    container:{
        backgroundColor: '#367E34',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 300,
        height: 48,
        paddingVertical: 14,
        paddingHorizontal: 24,
        marginHorizontal: 16,
        borderRadius: 8,
        gap: 10,

    },

    textStyle:{
        textAlign: 'center',
        fontSize: 14,
        fontWeight: 400,
        color: '#f9fafb'

    }
})



export default MyButton2;