import { View, Text } from 'react-native'
import React from 'react'
import NavBar from '../Components/NavBar'
const ProfileScreen = ({navigation}) => {
  return (
    <View>
      <Text>ProfileScreen</Text>
      <NavBar navigation={navigation}/>
    </View>
  )
}

export default ProfileScreen