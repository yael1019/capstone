import { View, Text } from 'react-native'
import React from 'react'

const AppointmentPage = ({ navigation, route }) => {
    const {apts} = route.params
  return (
    <View>
      <Text>AppointmentPage</Text>
      <Text>{ apts.service }</Text>
      <Text>{ apts.specialist }</Text>
      <Text>{ apts.date }</Text>
      <Text>{ apts.time }</Text>
    </View>
  )
}

export default AppointmentPage