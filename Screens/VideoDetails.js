import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';
const VideoDetails = ({video,thumbnail,navigation}) => {
    
    const params = useRoute().params
    const [description, setDescription] = useState()
    useEffect(() => {
        console.log(params)
    }, [])
    
    console.log(video,thumbnail)
  return (
    <View className='flex-1 items-center bg-[#383838]'>
        <TouchableOpacity className='bg-white rounded-full top-10 right-[170]' onPress={() => navigation.navigate('Add')}>
      <Ionicons name='arrow-back' size={42} color={'black'}/>
      </TouchableOpacity>

      <Text className='text-lg text-white mt-[70px]'>
        Add Details
      </Text>
      <Image source={{uri:params.thumbnail}} className='mb-[70] mt-[30] w-[200px] h-[300px] rounded-xl'/>
      <TextInput onChange={(value)=>setDescription(value)}
       className='p-3 w-[300] flex bg-white rounded-lg' placeholder='Description' />

      <TouchableOpacity className='bg-white p-3 mt-6 rounded-lg'>
        <Text>Publish</Text>
      </TouchableOpacity>
    </View>
  )
}

export default VideoDetails