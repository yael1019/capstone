import { View, Text, TextInput, TouchableOpacity, Keyboard, ScrollView } from 'react-native'
import React, { useState, useEffect, useContext } from 'react'
import * as SecureStore from 'expo-secure-store';
import { UserContext } from '../UserContext';

const LoginScreen = ({ navigation }) => {
  const [currentUser, setCurrentUser] = useContext(UserContext)
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
    fetch('http://localhost:3001/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accepts': 'application/json'
      },
      // body: JSON.stringify(form)
      body: JSON.stringify({"username": "TimmyTom", "password": "password123"})
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
    <ScrollView>
          <TextInput 
            name='username'
            placeholder='username'
            onBlur={Keyboard.dismiss}
            autoCorrect={false}
            autoCapitalize={false}
            onChangeText={(text) => handleChange(text, 'username')}
            onSubmitEditing={handleSubmit}
            // value={form.username}
            value="TimmyTom"
          />
          <TextInput 
            name='password'
            placeholder='password'
            onBlur={Keyboard.dismiss}
            autoCorrect={false}
            autoCapitalize={false}
            onChangeText={(text) => handleChange(text, 'password')}
            onSubmitEditing={handleSubmit}
            // value={form.password}
            value="password123"
          />
          <TouchableOpacity>
            <Text
            onPress={handleSubmit}
            >Log In</Text>
          </TouchableOpacity>
    </ScrollView>
  )
}

export default LoginScreen