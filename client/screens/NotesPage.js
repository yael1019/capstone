import { View, Text, ScrollView, StyleSheet, Dimensions, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'

const NotesPage = ({ route, navigation }) => {
    const {apts} = route.params
  return (
    <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground source={require('../orange.jpeg')} style={styles.image}>
          <TouchableOpacity>
          <Text onPress={() => navigation.goBack()} style={styles.arrow}>←</Text>
          </TouchableOpacity>
          <Text style={styles.brandViewText}>{apts.service} Notes</Text>
        </ImageBackground>
          <View style={styles.viewContainer}>
          {/* <Text>NotesPage</Text> */}
          <View style={styles.textContainer}>
          <Text style={styles.text}>{ apts.notes }</Text>
          </View>
          </View>
        </ScrollView>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#fff',
      // height: Dimensions.get('window').he
  },
  arrow: {
      fontSize: 30,
      marginTop: 55,
      marginLeft: 10,
    },
    image: {
      height: Dimensions.get('window').height / 5.5
    },
    brandViewText: {
      color: '#ffffff',
      fontSize: 20,
      fontWeight: 'bold',
      alignSelf: 'center',
      marginTop: -20,
      textTransform: 'uppercase'
    },
    viewContainer: {
      backgroundColor: '#ffffff',
      flex: 1.5,
      justifyContent: 'center',
      // alignItems: 'center',
      borderTopStartRadius: 60,
      borderTopEndRadius: 60,
      bottom: 60,
      // height: Dimensions.get('window').height ,
      paddingTop: 30,
      paddingLeft: 10,
      paddingRight: 10,
    },
    textContainer: {
      marginBottom: 20
    },
    text: {
      fontSize: 15,
      padding: 5
    },
})

export default NotesPage