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
import Ionicons from 'react-native-vector-icons/Ionicons'

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// export const UserContext = createContext()

function MyTabs() {
  return (
    <Tab.Navigator 
    screenOptions={{
      tabBarShowLabel: false,
      headerShown: false,
      tabBarStyle: {
        backgroundColor: '#fff',
        borderTopColor: '#f97316',
        borderTopWidth: 1,
        shadowOffset: {
          width: 0,
          height: 12,
      },
      shadowOpacity: 0.58,
      shadowRadius: 16.0,
      elevation: 24,
      },
      tabBarInactiveTintColor: '#f97316',
      tabBarActiveTintColor: '#fdba74',
    }}
    // screenOptions={({route}) => ({
    //   tabBarIcon: ({focused, color, size}) => {
    //       let iconName;
    //       let rn = route.name;
    //       if(rn === 'ServiceScreen') {
    //         iconName = focused ? 'home' : 'home-outline'
    //       }
    //       return <Ionicons name={iconName} /> 
    //   },
    // })}
    >
      <Tab.Screen name='ServiceScreen' component={ServiceScreen}
      options={{
        tabBarIcon: ({color, size, focused}) => {
          let iconName;
          focused ? iconName = 'home' : iconName = 'home-outline'
          return <Ionicons name={iconName} color={color} size={size} />
      }
      }}
      />
      <Tab.Screen name='AppointmentScreen' component={AppointmentScreen} 
       options={{
        tabBarIcon: ({color, size, focused}) => {
          let iconName;
          focused ? iconName = 'calendar' : iconName = 'calendar-outline'
          return <Ionicons name={iconName} color={color} size={size} />
        }
      }}
      />
      <Tab.Screen name='NotesScreen' component={NotesScreen}
       options={{
        tabBarIcon: ({color, size, focused}) => {
          let iconName;
          focused ? iconName = 'book' : iconName = 'book-outline'
          return <Ionicons name={iconName} color={color} size={size} />
        }
      }}
      />
      <Tab.Screen name='SettingsScreen' component={SettingsScreen} 
       options={{
        tabBarIcon: ({color, size, focused}) => {
          let iconName;
          focused ? iconName = 'settings' : iconName = 'settings-outline'
          return <Ionicons name={iconName} color={color} size={size} />
        }
      }}
      />
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
    // console.log('Stack', currentUser)
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