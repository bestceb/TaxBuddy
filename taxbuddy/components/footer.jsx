

import { TouchableOpacity, View, Text } from "react-native";



const MyFooter = ({label, icon, whenPressed, renderIcon, style}) =>{

    return (

        <View>

                <TouchableOpacity style={{alignItems: 'center'}} onPress={whenPressed} >
                       
                        { renderIcon ? icon : null }
                        <Text style={style} >{label}</Text>

                </TouchableOpacity>

        </View>
    )
}









export default MyFooter;