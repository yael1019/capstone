import { View, Text, TouchableOpacity, Linking, StyleSheet, ScrollView, ImageBackground, Dimensions } from 'react-native'
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
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.container}>
    <ImageBackground source={require('../orange.jpeg')} style={styles.image}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>Services</Text>
      </View>
      </ImageBackground>
      <View style={styles.items}>
        {mappedServices}
        <TouchableOpacity style={styles.caspaContainer}  onPress={() => Linking.openURL('https://caspa.liaisoncas.com/applicant-ux/#/login')}>
          <Text
            style={styles.caspa}
          >
            CASPA APPLICATION
          </Text>
        </TouchableOpacity>
      </View>
    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#ffffff'
    // backgroundColor: '#E8EAED'
  },
  wrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  items: {
    marginTop: 23,
    flex: 1.5,
    borderTopStartRadius: 60,
    borderTopEndRadius: 60,
    bottom: 80,
    backgroundColor: '#E8EAED',
    paddingTop: 45
  },
  title: {
    fontSize: 27,
    fontWeight: 'bold',
    alignSelf: 'center',
    color: '#fff'
  },
  caspaContainer: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    marginLeft: 15,
    marginRight: 15,
    fontSize: 16,
    backgroundColor: '#ea580c',
    // shadowOffset: {width: 1, height: 10},
    // shadowOpacity: 0.4,
    // shadowRadius: 3,
    // elevation: 15,
    shadowOffset: {
        width: 0,
        height: 6,
    },
    shadowOpacity: 0.5,
    shadowRadius: 16.0,
    elevation: 24,

  },
  caspa: {
      color: '#ffffff',
      fontSize: 18,
  },
  image: {
    height: Dimensions.get('window').height / 5.2
  },
})

export default ServiceScreen