import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'
import CreateAccountScreen from './screens/CreateAccountScreen'
import ServiceScreen from './screens/ServiceScreen'

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    // <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Navigator>
        <Stack.Screen name='home' component={HomeScreen}/>
        <Stack.Screen name='login' component={LoginScreen}/>
        <Stack.Screen name='createAccount' component={CreateAccountScreen}/>
        <Stack.Screen name='service' component={ServiceScreen}/>
    </Stack.Navigator>
  )
}

export default StackNavigator