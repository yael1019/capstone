import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import {useNavigation} from '@react-navigation/native'

const NotesCard = ({ apts }) => {
    const navigation = useNavigation()
  return (
    <View>
        <TouchableOpacity>
            <Text onPress={() => navigation.navigate('NotesPage', {apts: apts})}>NotesCard</Text>
        </TouchableOpacity>
    </View>
  )
}

export default NotesCard