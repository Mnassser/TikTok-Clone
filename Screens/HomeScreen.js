import { View, Text , TouchableOpacity, Image} from 'react-native'
import React from 'react'
import NavBar from '../Components/NavBar'
import VideoList from '../Components/VideoList'



const HomeScreen = ({navigation}) => {
  return (
    <View className='flex bg-[#383838]'>
      <View>
      <View className='absolute mx-[3%] top-[5%] z-10'>
            <View className='flex flex-row gap-[230]' onPress={()=>{
                console.log("hey")
            }}>
            <TouchableOpacity className='p-2 bg-slate-950 rounded-xl opacity-780'>
            <Text className='text-white text-xl'>TikTok</Text>
            </TouchableOpacity>
            <TouchableOpacity>
            <Image source={require('../assets/images/profile-img.jpg')} className='w-[50] h-[50] rounded-full'/>
            </TouchableOpacity>
            </View>
                </View>

        <VideoList/>
      </View>
     <NavBar navigation={navigation} />
    </View>
  )
}

export default HomeScreen