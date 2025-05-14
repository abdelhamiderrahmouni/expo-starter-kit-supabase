import { StatusBar } from 'expo-status-bar';

import { Pressable, Text, View, StyleSheet, Alert } from 'react-native';
import { Link, router } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';

export default function HomePage() {
  return (
    <>
      <View className='h-full items-center justify-center gap-6'>
        <Text className='text-4xl font-bold'>
          Home page
        </Text>
        
        <View className='w-full flex flex-row justify-center'>
          <Pressable className='bg-red-500 w-24 h-24 rounded-full flex items-center justify-center'
            onPress={() => alert('Pressed')}
          >
            <Text> 
                Press me
            </Text>
          </Pressable>
        </View>
      </View>
      <StatusBar style="auto" />
    </>
  );
}