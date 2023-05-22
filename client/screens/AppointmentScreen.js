import { View, Text } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { UserContext } from '../UserContext';
import AppointmentCard from './AppointmentCard';

const AppointmentScreen = () => {
  const [currentUser, setCurrentUser, currentApts, setCurrentApts] = useContext(UserContext)
  console.log(currentApts)
  const mappedApts = currentApts.map(apts => <AppointmentCard key={apts.id} apts={apts} />)
  return (
    <View>
      <Text>AppointmentScreen</Text>
      {mappedApts}
    </View>
  )
}

export default AppointmentScreen