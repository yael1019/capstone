import { View, Text, TextInput, TouchableOpacity, Keyboard, ScrollView, StyleSheet, SafeAreaView, ImageBackground, Dimensions } from 'react-native'
import React, { useState, useEffect, useContext } from 'react'
import * as SecureStore from 'expo-secure-store';
import { UserContext } from '../UserContext';
import { NativeBaseProvider, Box } from "native-base";

const LoginScreen = ({ navigation }) => {
  const [currentUser, setCurrentUser, currentApts, setCurrentApts, URL] = useContext(UserContext)
  const [form, setForm] = useState({
    username: '',
    password: ''
  })

  function handleChange(text, name){
    setForm({
      ...form,
      [name]: text
    })
  }

  function handleSubmit() {
    // console.log('submitting')
    fetch(`${URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accepts': 'application/json'
      },
      body: JSON.stringify(form)
      // body: JSON.stringify({"username": "TimmyTom", "password": "password123"})
    })
      .then(res => {
        if(res.ok) {
          res.json()
          .then(data => {
            setCurrentUser(data.user)
            SecureStore.setItemAsync('token', data.token)
          })
          setForm({
            username: '',
            password: ''
          })
          navigation.replace('ServiceScreen')
        } else {
          res.json()
          .then(data => alert(data.Error))
        }
      })
    // setForm({
    //   username: '',
    //   password: ''
    // })
  }

  return (
    // <NativeBaseProvider>
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.container}>
      {/* <SafeAreaView> */}
        <ImageBackground source={require('../orange.jpeg')} style={styles.image}>
          <TouchableOpacity>
          <Text onPress={() => navigation.goBack()} style={styles.arrow}>←</Text>
          </TouchableOpacity>
          <Text style={styles.brandViewText}>MENTORS</Text>
        </ImageBackground>
      {/* </SafeAreaView> */}
      <View style={styles.viewContainer}>
            <View style={{padding: 40}}>
              <Text style={{color: '#c2410c', fontSize: 34}}>LOG IN</Text>
            </View>
        <View style={{marginLeft: 50}}>
          <Text style={styles.labels}>Username:</Text>
          <TextInput 
            name='username'
            placeholder='BobbyBrown'
            onBlur={Keyboard.dismiss}
            autoCorrect={false}
            autoCapitalize={false}
            onChangeText={(text) => handleChange(text, 'username')}
            onSubmitEditing={handleSubmit}
            value={form.username}
            // value="TimmyTom"
            style={styles.textInput}
          />
          <Text style={styles.labels}>Password:</Text>
          <TextInput 
            name='password'
            placeholder='*********'
            onBlur={Keyboard.dismiss}
            autoCorrect={false}
            autoCapitalize={false}
            onChangeText={(text) => handleChange(text, 'password')}
            onSubmitEditing={handleSubmit}
            value={form.password}
            secureTextEntry={true}
            // value="password123"
            style={styles.textInput}
          />
          <TouchableOpacity style={styles.buttonContainer} onPress={handleSubmit}>
            <Text
            // onPress={handleSubmit}
            style={styles.button}
            >Log In</Text>
          </TouchableOpacity>
          </View>
          </View>
    {/* </SafeAreaView> */}
    </ScrollView>
    // </NativeBaseProvider>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  viewContainer: {
    backgroundColor: '#ffffff',
    flex: 1.5,
    justifyContent: 'center',
    // alignItems: 'center',
    borderTopStartRadius: 60,
    borderTopEndRadius: 60,
    bottom: 60,
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
    marginTop: -20
  },
  textInput: {
    borderBottomColor: '#ea580c',
    // color: 'white',
    // backgroundColor: 'red',
    fontSize: 18,
    width: 300,
    borderBottomWidth: 1,
    padding: 2,
    marginBottom: 20,
    marginTop: 10
  },
  labels: {
    fontSize: 14,
    color: 'grey'
    // alignSelf: 'flex-start'
  },
  buttonContainer: {
    // flex: 0.12,
    backgroundColor: '#ea580c',
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
    // marginBottom: 10,
    borderRadius: 8,
    // width: 100
    width: Dimensions.get('window').width / 4,
    shadowOffset: {width: 1, height: 10},
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 15,
    // shadowColor: '#fdba74',
  },
  button: {
    // alignSelf: 'center'
    // marginHorizontal: 30,
    // paddingBottom: 30,
    color: '#ffffff',
    fontSize: 18,
  },
})

export default LoginScreen