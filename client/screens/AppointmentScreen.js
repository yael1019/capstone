import { View, Text, StyleSheet, ScrollView, ImageBackground, Dimensions} from 'react-native'
import React, { useContext, useEffect } from 'react'
import { UserContext } from '../UserContext';
import AppointmentCard from './AppointmentCard';

const AppointmentScreen = () => {
  const [currentUser, setCurrentUser, currentApts, setCurrentApts] = useContext(UserContext)
  // console.log(currentApts)
  const mappedApts = currentApts.map(apts => <AppointmentCard key={apts.id} apts={apts} />)
  return (
    <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <ImageBackground source={require('../pink.webp')} style={styles.image}>
          <View style={styles.wrapper}>
            <Text style={styles.title}>APPOINTMENTS</Text>
          </View>
          </ImageBackground>

        <View style={styles.items}>
          {/* <Text>AppointmentScreen</Text> */}
          {mappedApts}
        </View>
    </ScrollView>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#ffffff'
    backgroundColor: '#E8EAED'
  },
  wrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
    // backgroundColor: '#E8EAED',
  }, 
  image: {
    height: Dimensions.get('window').height / 5.2
  },
  title: {
    fontSize: 27,
    fontWeight: 'bold',
    alignSelf: 'center',
    color: '#fff'
  },
  items: {
    marginTop: 23,
    flex: 1.5,
    borderTopStartRadius: 60,
    borderTopEndRadius: 60,
    bottom: 80,
    backgroundColor: '#E8EAED',
    paddingTop: 44
  },
})

export default AppointmentScreen