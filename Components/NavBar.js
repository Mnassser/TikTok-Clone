import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
const NavBar = ({navigation}) => {
  return (
    <View className='flex flex-row rounded-t-lg items-center justify-center h-[70px] py-2 bg-[#383838] absolute top-[92%]'>
    <TouchableOpacity onPress={() => navigation.navigate('Home')} className='ml-10 basis-1/4'>
    <Ionicons name='home' size={42} color={'white'}/>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Search')}  className='basis-1/4'>
      <Ionicons name='search' size={42} color={'white'}/>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() => navigation.navigate('Add')}  className='basis-1/4'>
      <Ionicons name='add' size={42} color={'white'}/>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Profile')}  className='basis-1/4'>
      <Ionicons name='person' size={42} color={'white'}/>
      </TouchableOpacity>
      </View>
  )
}

export default NavBar