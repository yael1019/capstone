import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import {useNavigation} from '@react-navigation/native'

const NotesCard = ({ apts }) => {
    const navigation = useNavigation()
    // console.log(apts)
  return (
    <View>
        <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('NotesPage', {apts: apts})}>
            <Text style={styles.text}>{apts.service}, {apts.date}</Text>
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

export default NotesCard