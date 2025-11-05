
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from "react-native";


const {width, height} = Dimensions.get('screen');

const MyButton4 = ({label, whenPressed, renderIcon, icon}) =>{


    return(

        <View>
                <TouchableOpacity style={mystyles.container} onPress={whenPressed} >
                                 <Text style={mystyles.textStyle} >{label}</Text>
                                {renderIcon ? icon : null}

                 </TouchableOpacity>
        </View>
        
    )
}


const mystyles = StyleSheet.create({
    container:{
        backgroundColor: '#F76D1B',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
       // width: 300,
        height: 48,
        paddingVertical: 14,
        paddingHorizontal: 24,
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



export default MyButton4;