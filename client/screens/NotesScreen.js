import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import { UserContext } from '../UserContext'
import NotesCard from './NotesCard'

const NotesScreen = () => {
    const [currentUser, setCurrentUser, currentApts, setCurrentApts] = useContext(UserContext)
    const filteredApts = currentApts.filter(apts => apts.completed === 'yes')
    const mappedApts = filteredApts.map(apts => <NotesCard key={apts.id} apts={apts} />)
  return (
    <View>
      <Text>NotesScreen</Text>
      {mappedApts}
    </View>
  )
}

export default NotesScreen