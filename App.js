import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Animated,{
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  Easing,
} from 'react-native-reanimated';

export default function AnimatedStyleUpdateExample(props){
  return(
    <View className="bg-red-300">
      <Text>hello world!</Text>
    </View>
  )
}
