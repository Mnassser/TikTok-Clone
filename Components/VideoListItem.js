import { View,Button, Text , StyleSheet, Dimensions ,TouchableOpacity,Image} from 'react-native'
import React, { useRef } from 'react'
import {ResizeMode,Video} from 'expo-av'
import { Ionicons } from '@expo/vector-icons';
const VideoListItem = ({data}) => {
    const video = useRef(null);
    const [status, setStatus] = React.useState(0);
    
   

  return (
    <View className='flex justify-center items-center bg-black'>
        <Video
        ref={video}
        source={{
          uri: data.item.videoUrl,
        }}
        useNativeControls={false}
        resizeMode={ResizeMode.STRETCH}
        isLooping
        shouldPlay={3 == data.item.id ? true:false}
        rate={1.0}
        key={data.item.id}
        onPlaybackStatusUpdate={status => setStatus(() => status)}
       style={style.video}/>

        <View className='absolute right-[5px] gap-[25] z-10'>
            {data.item.isLive == true ?<Text className='bg-[#ff2b2b] p-[3px] text-[#fff] rounded-lg'>Live</Text>:''}
            <TouchableOpacity onPress={()=>{
                console.log("hey")
            }}>
            <Ionicons name='heart' size={40} color={'white'}/>
            {/* <Text className='text-[#fff]'>{data.item.subscriber}</Text> */}
            </TouchableOpacity>
                
            
            <TouchableOpacity  onPress={()=>{
                console.log("hey")
            }}>
            <Ionicons name='chatbubble-outline' size={40} color={'#fff'}/>
            <Text className='text-[#fff]'>{data.item.comments}</Text>
            </TouchableOpacity>
            
            <TouchableOpacity  onPress={()=>{
                console.log("hey")
            }}>
            <Ionicons name='paper-plane-outline' size={40} color={'#fff'}/>
            <Text className='text-[#fff]'>{data.item.shares}</Text>
            </TouchableOpacity>
                </View>


                {/* User Data ♥ */}

                <View className='absolute left-[5px] bottom-[15%]'>
            <TouchableOpacity className='flex flex-row' onPress={()=>{
                console.log("hey")
            }}>
            <Image source={require('../assets/images/profile-img.jpg')} className='w-[50] h-[50] my-[5px] rounded-full'/>
            <Text className='text-white text-lg mx-[10px] my-[10px]'>{data.item.author}</Text>
            </TouchableOpacity>

            <View className='flex flex-row'>
            
            <Text className='text-white text-lg'>#{data.item.title}</Text>
            </View>
            
            
                </View>
    </View>
  )
}

const style= StyleSheet.create({
    video:{
        alignSelf:'center',
        width:Dimensions.get('screen').width,
        height:Dimensions.get('screen').height+-15,
    }
})
export default VideoListItem