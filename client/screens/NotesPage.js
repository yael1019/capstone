import { View, Text } from 'react-native'
import React from 'react'

const NotesPage = ({ route }) => {
    const {apts} = route.params
  return (
    <View>
      <Text>NotesPage</Text>
    </View>
  )
}

export default NotesPage