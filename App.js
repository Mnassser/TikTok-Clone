import { StatusBar } from 'expo-status-bar';
import {  View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from './Screens/HomeScreen';

import SearchScreen from './Screens/SearchScreen';
import AddScreen from './Screens/AddScreen';
import ProfileScreen from './Screens/ProfileScreen';
import { Ionicons } from '@expo/vector-icons';
import VideoDetails from './Screens/VideoDetails';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {
  

  const Stack = createNativeStackNavigator();

  return (
    <View className='h-[100%]'>
 <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" options={{
          headerShown:false
        }} component={HomeScreen} />
        <Stack.Screen name="Search" options={{
          headerShown:false
        }} component={SearchScreen} />
      <Stack.Screen name="Profile" options={{
        headerShown:false
      }} component={ProfileScreen} />

<Stack.Screen name="Add" options={{
        headerShown:false
      }} component={AddScreen} />

      <Stack.Screen name="VideoDetails" options={{
        headerShown:false
      }} component={VideoDetails} />
      </Stack.Navigator>
    </NavigationContainer>
    <StatusBar style='light'/>
    </View>
  );
}

