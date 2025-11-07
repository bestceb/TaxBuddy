

import { TouchableOpacity, View, Text, Image } from "react-native";



const MyFooter = ({label, icon, whenPressed, renderIcon, style, source}) =>{

    return (

        <View>

                <TouchableOpacity style={{alignItems: 'center', justifyContent: 'center'}} onPress={whenPressed} >
                       
                        <Image
                            style={{width: 24, height: 24}}
                            source={source}
                        />
                        {renderIcon ? icon : null}
                        <Text style={style} >{label}</Text>

                </TouchableOpacity>

        </View>
    )
}









export default MyFooter;