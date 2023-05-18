import { View, Text, TouchableOpacity } from 'react-native'
import React, {useContext} from 'react'
import { useNavigationState } from '@react-navigation/native'
import { UserContext } from '../StackNavigator'
import * as SecureStore from 'expo-secure-store';

const ServiceScreen = ({ navigation }) => {
    const [currentUser, setCurrentUser] = useContext(UserContext)
    
    function handleLogout() {
        setCurrentUser(null)
        SecureStore.deleteItemAsync('token')
        navigation.replace('home')
    }
  return (
    <View>
      <Text>ServiceScreen</Text>
      <TouchableOpacity>
        <Text onPress={handleLogout}>Log Out</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ServiceScreen