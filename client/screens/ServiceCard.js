import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import ServicePage from './ServicePage'
import {useNavigation} from '@react-navigation/native'

const ServiceCard = ({ service }) => {
    const navigation = useNavigation()
  return (
    <View style={styles.item}>
        <TouchableOpacity>
            <Text 
            style={styles.text}
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

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        // alignItems: 'center',
        marginBottom: 20,
        marginLeft: 15,
        marginRight: 15,
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.5,
        shadowRadius: 16.0,
        // elevation: 24,
        // borderBottomColor: '#ea580c',
        // borderBottomWidth: 1.5
    },
    text: {
    //    maxWidth: '80%' 
        fontSize: 16
    },
})

export default ServiceCard