import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import {useNavigation} from '@react-navigation/native'

const AppointmentCard = ({apts}) => {
    const navigation = useNavigation()
  return (
    <View>
        <TouchableOpacity onPress={() => navigation.navigate('AppointmentPage', {apts: apts})}>
            <Text>Appointment</Text>
            <Text>{ apts.service }</Text>
        </TouchableOpacity>
    </View>
  )
}

export default AppointmentCard