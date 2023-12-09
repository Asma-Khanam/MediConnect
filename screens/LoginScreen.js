import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import Animated, { FadeIn, FadeInDown, FadeInUp, FadeOut } from 'react-native-reanimated';

export default function LoginScreen() {
  return (
    <View className="bg-white h-full w-full" >
      <StatusBar style="light" />
      <Image className="h-full w-full absolute" source={require('/Users/asmakhanam/Desktop/MediConnect/MediConnect/assets/images/background.png')} />
      
      {/* TITLE AND FORM */}
      <View className="h-full w-full flex justify-around pt-40 pb-10 " style={{paddingTop:450}}>
        {/* FORM */}
        <View className="flex items-center mx-4 space-y-4">
          {/* USER ID */}
          <Animated.View entering={FadeInDown.duration(1000).springify()} className="bg-black/5 p-5 rounded-2xl w-full" >
            <TextInput placeholder="User ID:" placeholderTextColor={'gray'} />
          </Animated.View>
          {/* PASSWORD */}
          <View className="bg-black/5 p-5 rounded-2xl w-full mb-3">
            <TextInput placeholder="Password:" placeholderTextColor={'gray'} secureTextEntry />
          </View>
          <View className="w-full">
            <TouchableOpacity className="w-full bg-sky-400 p-3 rounded-2xl mb-3">
              <Text className="text-xl font-bold text-white text-center">Login</Text>
            </TouchableOpacity>
          </View>
          <View className="flex-row justify-center">
            <TouchableOpacity>
              <Text className="text-sky-600">Forgot Password?</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
