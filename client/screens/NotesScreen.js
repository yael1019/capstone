import { View, Text, StyleSheet, ScrollView, ImageBackground, Dimensions } from 'react-native'
import React, { useContext } from 'react'
import { UserContext } from '../UserContext'
import NotesCard from './NotesCard'

const NotesScreen = () => {
    const [currentUser, setCurrentUser, currentApts, setCurrentApts] = useContext(UserContext)
    const filteredApts = currentApts.filter(apts => apts.completed === 'yes')
    const mappedApts = filteredApts.map(apts => <NotesCard key={apts.id} apts={apts} />)
  return (
    <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
          <ImageBackground source={require('../pink.webp')} style={styles.image}>
              <View style={styles.wrapper}>
                <Text style={styles.title}>NOTES</Text>
              </View>
          </ImageBackground>
          <View style={styles.items}>
            {/* <Text>NotesScreen</Text> */}
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
    backgroundColor: '#E8EAED',
  },
  wrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 27,
    fontWeight: 'bold',
    alignSelf: 'center',
    color: '#fff'
  },
  image: {
    height: Dimensions.get('window').height / 5.2
  },
  items: {
    marginTop: 23,
    flex: 1.5,
    borderTopStartRadius: 60,
    borderTopEndRadius: 60,
    bottom: 80,
    backgroundColor: '#E8EAED',
    paddingTop: 45
  },
})

export default NotesScreen