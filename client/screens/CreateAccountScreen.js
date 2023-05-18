import { View, Text, TextInput, ScrollView, Keyboard, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const CreateAccountScreen = ({ navigation }) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    username: '',
    password: ''
  })

  function handleChange(text, name) {
    setForm({
      ...form,
      [name]: text
    })
  }

  function handleSubmit() {
     console.log('submitting')
     console.log(form)
     setForm({
      name: '',
      email: '',
      username: '',
      password: ''
     })
     navigation.replace('login')
  }

  return (
    <ScrollView>
      <View>
        <TextInput 
          name='name'
          placeholder='name'
          onBlur={Keyboard.dismiss}
          onChangeText={text => handleChange(text, 'name')}
          onSubmitEditing={() => handleSubmit()}
          value={form.name}
          autoCorrect={false}
          autoCapitalize={false}
        />
        <TextInput 
          name='email'
          placeholder='email'
          onBlur={Keyboard.dismiss}
          onChangeText={text => handleChange(text, 'email')}
          onSubmitEditing={() => handleSubmit()}
          value={form.email}
          autoCorrect={false}
          autoCapitalize={false}
          />
        <TextInput 
          name='username'
          placeholder='username'
          onBlur={Keyboard.dismiss}
          onChangeText={text => handleChange(text, 'username')}
          onSubmitEditing={() => handleSubmit()}
          value={form.username}
          autoCorrect={false}
          autoCapitalize={false}
        />
        <TextInput 
          name='password'
          placeholder='password'
          onBlur={Keyboard.dismiss}
          onChangeText={text => handleChange(text, 'password')}
          onSubmitEditing={() => handleSubmit()}
          value={form.password}
          autoCorrect={false}
          autoCapitalize={false}
        />
        <TouchableOpacity>
          <Text
          onPress={() => handleSubmit()}
          >Submit</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

export default CreateAccountScreen