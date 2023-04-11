import { StyleSheet, Text, View , SafeAreaView} from "react-native";
import {Link} from "expo-router"

export default function Page() {
  return (
    
      <SafeAreaView className="pt-10">
        <Text className="text-4xl text-red-700">Hello World ddddd</Text>
        <Text >This is the first page of your app.</Text>
        <Link href='/details'>details</Link>
      </SafeAreaView>
    
  );
}

