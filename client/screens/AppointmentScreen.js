import { View, Text } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { UserContext } from '../UserContext';
import AppointmentCard from './AppointmentCard';

const AppointmentScreen = () => {
  const [currentUser, setCurrentUser, currentApts, setCurrentApts] = useContext(UserContext)
  console.log(currentApts)
  // useEffect(() => {
  //   console.log('Stack', currentUser.user)
  //   if(currentUser) {
  //   fetch(`http://localhost:3001/appointments/3/${currentUser.id}`)
  //     .then(res => res.json())
  //     .then(data => setCurrentApts(data))
  //   }
  // }, [currentUser])
  const mappedApts = currentApts.map(apts => <AppointmentCard key={apts.id} apts={apts} />)
  return (
    <View>
      <Text>AppointmentScreen</Text>
      {mappedApts}
    </View>
  )
}

export default AppointmentScreen