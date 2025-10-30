import { Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


const Splash = () =>{

    return(


        <SafeAreaView style={{backgroundColor: 'white', flex: 1, justifyContent: 'center', alignItems: 'center' }} >
            <Image style={{width: 308.57, height: 120}} source={require('../assets/images/app-logo.png')} />
        </SafeAreaView>
    );
}




export default Splash;