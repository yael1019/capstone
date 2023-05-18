import { View, Text } from 'react-native'
import React, { createContext, useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'
import CreateAccountScreen from './screens/CreateAccountScreen'
import ServiceScreen from './screens/ServiceScreen'

const Stack = createNativeStackNavigator();

export const UserContext = createContext()

const StackNavigator = () => {
  const [currentUser, setCurrentUser] = useState(null)
  return (
    // <Stack.Navigator screenOptions={{headerShown: false}}>
    <UserContext.Provider value={[currentUser, setCurrentUser]}>
      <Stack.Navigator>
          <Stack.Screen name='home' component={HomeScreen}/>
          <Stack.Screen name='login' component={LoginScreen}/>
          <Stack.Screen name='createAccount' component={CreateAccountScreen}/>
          <Stack.Screen name='service' component={ServiceScreen}/>
      </Stack.Navigator>
    </UserContext.Provider>
  )
}

export default StackNavigator