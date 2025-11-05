
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from "react-native";


const {width, height} = Dimensions.get('screen');

const MyButton3 = ({label, label2, whenPressed1, whenPressed2 }) =>{


    return(

        <View style={{flexDirection: 'row', alignSelf: 'flex-end', gap: 16, marginHorizontal: 16, marginTop: 60, marginBottom: 32,}}>
                <TouchableOpacity style={mystyles.container} onPress={whenPressed1} >
                                 <Text style={mystyles.textStyle} >{label}</Text>
                 </TouchableOpacity>

                 <TouchableOpacity style={mystyles.container2} onPress={whenPressed2} >
                                {/* {renderIcon ? icon : null} */}
                                 <Text style={mystyles.textStyle} >{label2}</Text>
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
        height: 28,
        paddingVertical: 4,
        paddingHorizontal: 10,
        borderRadius: 8,
        gap: 10,

    },

    container2:{
        backgroundColor: '#FF0000',
        paddingVertical: 4,
        paddingHorizontal: 10,
        borderRadius: 8,
        
    },

    textStyle:{
        textAlign: 'center',
        fontSize: 14,
        fontWeight: 400,
        color: '#f9fafb'

    }
})



export default MyButton3;