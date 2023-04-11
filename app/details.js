import { StyleSheet, Text, View , SafeAreaView} from "react-native";
import {Link} from "expo-router"

const details = () => {
    return ( 
        <SafeAreaView className="pt-10">
            <Text>HELLO</Text>
            <Link href='/'>Home</Link>
        </SafeAreaView >

     );
}
 
export default details;