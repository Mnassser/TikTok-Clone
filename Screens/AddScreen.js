import { View, Text, Image, TouchableOpacity } from 'react-native'
import * as ImagePicker from 'expo-image-picker';
import * as VideoThumbnails from 'expo-video-thumbnails';
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';
import NavBar from '../Components/NavBar';
const AddScreen = ({navigation}) => {
    
    // const navigation = useNavigation();
    const [image, setImage] = useState(null);
    const [video, setVideo] = useState(null);
    const Stack = createStackNavigator();
    const selectVideo = async () => {
      // No permissions request is necessary for launching the image library
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Videos,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
  

  
      if (!result.canceled) {

        generateThumbnail(result.assets[0].uri)
        // setVideo(result.assets[0].uri);
      }
    };

    const generateThumbnail = async (VideoUri) => {
        try {
          const { uri } = await VideoThumbnails.getThumbnailAsync(
            VideoUri,
            {
              time: 10000,
            }
          );
          navigation.navigate('VideoDetails',{
            video:VideoUri,
            thumbnail:uri,
            navigation:navigation
          })
        } catch (e) {
          console.warn(e);
        }
      };

  return (
    <View className='flex-1 items-center justify-center bg-[#383838]'>
      
      <Image source={
        require('../assets/images/Upload-file.png')
      }
      className='w-[100px] h-[100px]'
      />
      <Text className='text-white mt-1 text-xl'>
        Upload New Video From Here
      </Text>


      <TouchableOpacity onPress={()=>{
        selectVideo()
      }} className='bg-white p-3 rounded-3xl mt-6'>
      <Text className='text-lg'>
        Select Video
      </Text>
      </TouchableOpacity>
      <NavBar navigation={navigation}/>
    </View>
  )
}

export default AddScreen