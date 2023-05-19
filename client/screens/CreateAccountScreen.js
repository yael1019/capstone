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
     if (form.password.length < 8) {
      return alert('Password must be at least 8 characters')
     } else {
       fetch('http://localhost:3001/users', {
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
              if (data.Error) return alert(data.Error)
              // console.log(data)
              setForm({
               name: '',
               email: '',
               username: '',
               password: ''
              })
              navigation.replace('login')
            })
          } else {
            res.json()
            .then(data => alert(data.Error))
          }
        })
     }
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