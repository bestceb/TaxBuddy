

import { TouchableOpacity, View, Text, Image } from "react-native";



const MyFooter = ({label, icon, whenPressed, renderIcon, style, source}) =>{

    return (

        <View>

                <TouchableOpacity style={{alignItems: 'center', justifyContent: 'center', top: 1, paddingHorizontal: 8, paddingBottom: 8}} onPress={whenPressed} >
                       
                        <Image
                            style={{width: 24, height: 24, marginBottom: 4}}
                            source={source}
                        />
                        {renderIcon ? icon : null}
                        <Text style={{color: '#212121BF'}} >{label}</Text>

                </TouchableOpacity>

        </View>
    )
}









export default MyFooter;