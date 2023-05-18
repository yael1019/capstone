import { View, Text, TextInput, TouchableOpacity, Keyboard, ScrollView } from 'react-native'
import React, { useState } from 'react'

const LoginScreen = ({ navigation }) => {
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
    console.log('submitting')
    console.log(form)
    setForm({
      username: '',
      password: ''
    })
    navigation.replace('service')
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
      />
      <TextInput 
        name='password'
        placeholder='password'
        onBlur={Keyboard.dismiss}
        autoCorrect={false}
        autoCapitalize={false}
        onChangeText={(text) => handleChange(text, 'password')}
        onSubmitEditing={handleSubmit}
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