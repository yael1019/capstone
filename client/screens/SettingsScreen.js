import { View, Text, TouchableOpacity, Dimensions, ImageBackground, StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import { UserContext } from '../UserContext'
import * as SecureStore from 'expo-secure-store';

const SettingsScreen = ({ navigation }) => {
    const [currentUser, setCurrentUser] = useContext(UserContext)
    //  console.log('Settings',currentUser)
     function handleLogout() {
        setCurrentUser(null)
        SecureStore.deleteItemAsync('token')
        navigation.replace('HomeScreen')
    }
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../orange.jpeg')} style={styles.image}>
        <View style={styles.wrapper}>
          <Text style={styles.brandViewText}>SETTINGS</Text>
        </View>
      </ImageBackground>
      <View style={styles.viewContainer}>
        <View style={styles.textContainer}>
          {/* <Text>SettingsScreen</Text> */}
          <Text>
          {/* <Text style={styles.text}></Text> */}
          <Text style={{fontWeight: 'bold', fontSize: 22,}}>{ currentUser.name }</Text>
          </Text>
          <Text>
          <Text style={{fontWeight: 'bold', fontSize: 22,}}>Email: </Text>
          <Text style={styles.text}> { currentUser.email }</Text>
          </Text>
          <Text>
          <Text style={{fontWeight: 'bold', fontSize: 22,}}>Username: </Text>
          <Text style={styles.text}> { currentUser.username }</Text>
          </Text>
        </View>
      <TouchableOpacity style={styles.buttonContainer} onPress={handleLogout}>
        <Text style={styles.button}>Log Out</Text>
      </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
    // height: Dimensions.get('window').he
},
image: {
  height: Dimensions.get('window').height / 5.2
},
wrapper: {
  paddingTop: 80,
  paddingHorizontal: 20,
},
brandViewText: {
  fontSize: 27,
  fontWeight: 'bold',
  alignSelf: 'center',
  color: '#fff',
  // marginTop: 60,
},
viewContainer: {
  // backgroundColor: '#ffffff',
  // backgroundColor: '#fff',
  // flex: 1.5,
  // justifyContent: 'center',
  // // alignItems: 'center',
  // borderTopStartRadius: 60,
  // borderTopEndRadius: 60,
  // bottom: 60,
  // // height: Dimensions.get('window').height ,
  // paddingTop: 0,
  // paddingLeft: 10,
  // paddingRight: 10,
  // justifyContent: 'flex-start',
  // paddingTop: 20
    marginTop: 23,
    flex: 1.5,
    borderTopStartRadius: 60,
    borderTopEndRadius: 60,
    bottom: 80,
    backgroundColor: '#E8EAED',
    paddingTop: 45
},
textContainer: {
  // marginBottom: 20
  borderWidth: 6,
  // borderColor: '#ea580c',
  borderColor: '#fb923c',
  // borderColor: 'black',
  // backgroundColor: '#E8EAED',
  // backgroundColor: '#fff',
  // backgroundColor: '#ea580c',
  backgroundColor: '#f5f5f5',
  // backgroundColor: 'black',
  // backgroundColor: '#fb923c',
  borderRadius: 30,
  padding: 40,
  marginTop: 50,
  marginLeft: 10,
  marginRight: 10,
  flex: 0.8,
  justifyContent: 'space-evenly',
  shadowOffset: {width: 5, height: 10},
  shadowOpacity: 0.6,
  shadowRadius: 3,
},
text: {
  fontSize: 20,
  padding: 5, 
  // color: '#fff'
},
buttonContainer: {
  // flex: 0.12,
  backgroundColor: 'red',
  justifyContent: 'center',
  alignItems: 'center',
  height: 35,
  // marginBottom: 10,
  borderRadius: 8,
  // width: 100
  width: Dimensions.get('window').width / 3,
  shadowOffset: {width: 1, height: 10},
  shadowOpacity: 0.4,
  shadowRadius: 3,
  elevation: 15,
  // shadowColor: '#fdba74',
  alignSelf: 'center',
  marginTop: 40,
  // height: 30
},
button: {
  // alignSelf: 'center'
  // marginHorizontal: 30,
  // paddingBottom: 30,
  color: '#ffffff',
  fontSize: 18,
},
})

export default SettingsScreen