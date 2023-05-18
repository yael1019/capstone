import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const ServiceScreen = ({ navigation }) => {
    function handleLogout() {
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