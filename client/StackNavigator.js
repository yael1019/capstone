import { View, Text } from 'react-native'
import React, { useState, useEffect } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'
import CreateAccountScreen from './screens/CreateAccountScreen'
import ServiceScreen from './screens/ServiceScreen'
import { UserContext } from './UserContext'
import * as SecureStore from 'expo-secure-store';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AppointmentScreen from './screens/AppointmentScreen'
import ServicePage from './screens/ServicePage'
import AppointmentPage from './screens/AppointmentPage'
import NotesScreen from './screens/NotesScreen'
import NotesPage from './screens/NotesPage'
import SettingsScreen from './screens/SettingsScreen'

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// export const UserContext = createContext()

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name='ServiceScreen' component={ServiceScreen}/>
      <Tab.Screen name='AppointmentScreen' component={AppointmentScreen} />
      <Tab.Screen name='NotesScreen' component={NotesScreen}/>
      <Tab.Screen name='SettingsScreen' component={SettingsScreen} />
    </Tab.Navigator>
  )
}

const StackNavigator = () => {
  const [currentUser, setCurrentUser] = useState(null)
  const [currentApts, setCurrentApts] = useState([])
  const [loaded, setLoaded] = useState(false)
  // console.log(currentUser)

  useEffect(() => {
    async function checkToken() {
      const token = await SecureStore.getItemAsync('token')
      if(token) {
          // console.log(token)
          const headers = {
            'Authorization': `Bearer ${token}`
          }
          const res = await fetch('http://localhost:3001/check_token', { headers })
          const data = await res.json()
          // console.log(data)
          setCurrentUser(data.user)
          setLoaded(true)
        }  else {
          setLoaded(true)
        }
      }
      checkToken()
  }, [])

  useEffect(() => {
    console.log('Stack', currentUser)
    if(currentUser) {
    fetch(`http://localhost:3001/appointments/3/${currentUser.id}`)
      .then(res => res.json())
      .then(data => setCurrentApts(data))
    }
  }, [currentUser])

  if (!loaded) {
    return <Text>Loading. . . </Text>
  }

  return (
    // <Stack.Navigator screenOptions={{headerShown: false}}>
    <UserContext.Provider value={[currentUser, setCurrentUser, currentApts, setCurrentApts]}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {
          !currentUser
          ?
          <>
            <Stack.Screen name='HomeScreen' component={HomeScreen} />
            <Stack.Screen name='LoginScreen' component={LoginScreen}/>
            <Stack.Screen name='CreateAccountScreen' component={CreateAccountScreen}/>
          </>
          :
          <>
            <Stack.Screen name='MyTabs' component={MyTabs} options={{ headerShown: false }}/>
            <Stack.Screen name='ServiceScreen' component={ServiceScreen}/>
            <Stack.Screen name='ServicePage' component={ServicePage} />
            <Stack.Screen name='AppointmentPage' component={AppointmentPage} />
            <Stack.Screen name='NotesPage' component={NotesPage} />
          </>
        }
      </Stack.Navigator>
    </UserContext.Provider>
  )
}

export default StackNavigator