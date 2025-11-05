
import { StyleSheet, Text, View } from "react-native";


const MyMessage = ({label1, label2, label3, label4, label5, label6, label7, label8, label9, label10, label11}) =>{

    return(
        <View style={mystyles.container}>

            <View style={mystyles.style1}>
                <Text style={mystyles.text1}>{label1}</Text>
                <Text style={mystyles.text2}>{label2}</Text>
            </View>

            <Text style={mystyles.style2Text}>{label3}</Text>

            <Text style={{color: '#4A5565'}}>{label4}</Text>



        </View>
    )
}

const mystyles = StyleSheet.create({

    container:{
        backgroundColor: '#E6E6FF',
        height: 164,
        marginHorizontal: 16,
        padding: 16,
        borderRadius: 20,
    },

    style1:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 32,
    },

    text1:{
        color: '#0000FF',
        fontSize: 16,
    },

    text2:{
        color: '#212121',
        fontSize: 16,
    },

    style2Text:{
        color: '#150106',
        fontSize: 16,
        paddingRight: 5,
        width: 279,
        height: 48,
        
    }


});




export default MyMessage;