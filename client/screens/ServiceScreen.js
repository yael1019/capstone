import { View, Text, TouchableOpacity } from 'react-native'
import React, {useContext, useEffect, useState} from 'react'
import { useNavigationState } from '@react-navigation/native'
import { UserContext } from '../UserContext'
import * as SecureStore from 'expo-secure-store';
import ServiceCard from './ServiceCard'

const ServiceScreen = ({ navigation }) => {
    const [services, setServices] = useState([])

    useEffect(() => {
      fetch('http://localhost:3001/services')
        .then(resp => resp.json())
        .then(data => setServices(data))
    }, [])

    const mappedServices = services.map(service => <ServiceCard key={service.id} service={service} />)
    
  return (
    <View>
      <Text>ServiceScreen</Text>
      {mappedServices}
    </View>
  )
}

export default ServiceScreen