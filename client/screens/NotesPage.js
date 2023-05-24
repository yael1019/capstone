import { View, Text, ScrollView } from 'react-native'
import React from 'react'

const NotesPage = ({ route }) => {
    const {apts} = route.params
  return (
    <ScrollView>
      <View>
        <Text>NotesPage</Text>
        <Text>{ apts.notes }</Text>
      </View>
    </ScrollView>
  )
}

export default NotesPage