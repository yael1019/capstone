import { View, Text, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { UserContext } from '../UserContext'
import * as SecureStore from 'expo-secure-store';

const SettingsScreen = ({ navigation }) => {
    const [currentUser, setCurrentUser] = useContext(UserContext)
     console.log('Settings',currentUser)
     function handleLogout() {
        setCurrentUser(null)
        SecureStore.deleteItemAsync('token')
        navigation.replace('HomeScreen')
    }
  return (
    <View>
      <Text>SettingsScreen</Text>
      <Text>{ currentUser.name }</Text>
      <Text>{ currentUser.email }</Text>
      <Text>{ currentUser.username }</Text>
      <TouchableOpacity>
        <Text onPress={handleLogout}>Log Out</Text>
      </TouchableOpacity>
    </View>
  )
}

export default SettingsScreen