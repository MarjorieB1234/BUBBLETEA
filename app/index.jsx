import { StatusBar } from 'expo-status-bar';
import {Text, View, Image } from 'react-native';
import { Link } from 'expo-router';


export default function App() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-5xl">Welcome</Text>
      <Text className="text-5xl">to</Text>
      <Text className="text-5xl">BUBBLETEA</Text>
        <Link href="/profile">Go to my Profile</Link>
      <StatusBar style="auto"/>
    </View>
  );
}

