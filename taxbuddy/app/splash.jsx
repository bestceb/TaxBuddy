import { Image, Text, View} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


const Splash = () =>{

    return(


        <SafeAreaView style={{backgroundColor: 'white', flex: 1, }} >

            <View style={{justifyContent: 'center', alignItems: 'center', top: 280, gap: 326}}>
                <Image style={{width: 308.57, height: 120,}} source={require('../assets/images/app-logo.png')} />
                <Text style={{color: '#367E34', fontWeight: 500}}>Your Personal Tax Assistant</Text>
            </View>
        </SafeAreaView>
    );
}




export default Splash;