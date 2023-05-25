import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import {useNavigation} from '@react-navigation/native'

const AppointmentCard = ({apts}) => {
    const navigation = useNavigation()
  return (
    <View>
        <View style={styles.item}>
            {/* <Text>Appointment</Text> */}
            <Text style={styles.text}>{ apts.service }</Text>
            <Text style={styles.text}>{ apts.specialist }</Text>
            <Text style={styles.text}>{ apts.date }</Text>
            <Text style={styles.text}>{ apts.time }</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 20,
    flexDirection: 'column',
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

export default AppointmentCard