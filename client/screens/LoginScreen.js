import { View, Text, TextInput, TouchableOpacity, Keyboard, ScrollView } from 'react-native'
import React, { useState, useEffect, useContext } from 'react'
import * as SecureStore from 'expo-secure-store';
import { UserContext } from '../StackNavigator';

const LoginScreen = ({ navigation }) => {
  const [currentUser, setCurrentUser] = useContext(UserContext)
  const [form, setForm] = useState({
    username: '',
    password: ''
  })
  // const [currentUser, setCurrentUser] = useState(null)

  function handleChange(text, name){
    setForm({
      ...form,
      [name]: text
    })
  }

  useEffect(() => {
    async function checkToken() {
      const token = await SecureStore.getItemAsync('token')
      if(token) {
          // console.log(token)
          const headers = {
            'Authorization': `Bearer ${token}`
          }
          const res = await fetch('http://localhost:3001/check_token', { headers })
          const data = await res.json()
          console.log(data)
          setCurrentUser(data.user)
        }
      }
      checkToken()
  }, [])

  function handleSubmit() {
    // console.log('submitting')
    fetch('http://localhost:3001/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accepts': 'application/json'
      },
      body: JSON.stringify(form)
    })
      .then(res => {
        if(res.ok) {
          res.json()
          .then(data => {
            setCurrentUser(data)
            SecureStore.setItemAsync('token', data.token)
          })
          setForm({
            username: '',
            password: ''
          })
          navigation.replace('service', {currentUser: currentUser})
        } else {
          res.json()
          .then(data => alert(data.Error))
        }
      })
    setForm({
      username: '',
      password: ''
    })
  }
  return (
    <ScrollView>
      {
        currentUser
        ?
        navigation.replace('service')
        :
        <>
          <TextInput 
            name='username'
            placeholder='username'
            onBlur={Keyboard.dismiss}
            autoCorrect={false}
            autoCapitalize={false}
            onChangeText={(text) => handleChange(text, 'username')}
            onSubmitEditing={handleSubmit}
            value={form.username}
          />
          <TextInput 
            name='password'
            placeholder='password'
            onBlur={Keyboard.dismiss}
            autoCorrect={false}
            autoCapitalize={false}
            onChangeText={(text) => handleChange(text, 'password')}
            onSubmitEditing={handleSubmit}
            value={form.password}
          />
          <TouchableOpacity>
            <Text
            onPress={handleSubmit}
            >Log In</Text>
          </TouchableOpacity>
      </>
      }
    </ScrollView>
  )
}

export default LoginScreen