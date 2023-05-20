import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import ServicePage from './ServicePage'
import {useNavigation} from '@react-navigation/native'

const ServiceCard = ({ service }) => {
    const navigation = useNavigation()
  return (
    <View>
        <TouchableOpacity>
            <Text 
            onPress={() => navigation.navigate('ServicePage', {
                service: service
            })}
            >
                {service.name}
            </Text>
        </TouchableOpacity>
    </View>
  )
}

export default ServiceCard