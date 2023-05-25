import { View, Text, TextInput, ScrollView, Keyboard, TouchableOpacity, StyleSheet, ImageBackground, Dimensions } from 'react-native'
import React, { useState, useContext } from 'react'
import { UserContext } from '../UserContext'

const CreateAccountScreen = ({ navigation }) => {
  const [currentUser, setCurrentUser, currentApts, setCurrentApts, URL] = useContext(UserContext)
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
    //  console.log('submitting')
     if (form.password.length < 8) {
      return alert('Password must be at least 8 characters')
     } else {
       fetch(`${URL}/users`, {
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
              navigation.replace('LoginScreen')
            })
          } else {
            res.json()
            .then(data => alert(data.Error))
          }
        })
     }
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.container}>
      <ImageBackground source={require('../orange.jpeg')} style={styles.image}>
          <TouchableOpacity>
          <Text onPress={() => navigation.goBack()} style={styles.arrow}>←</Text>
          </TouchableOpacity>
          <Text style={styles.brandViewText}>MENTORS</Text>
        </ImageBackground>
      <View style={styles.viewContainer}>
            <View style={{padding: 40}}>
              <Text style={{color: '#c2410c', fontSize: 34}}>Create Account</Text>
            </View>
        <View style={{marginLeft: 50}}>
        <Text style={styles.labels}>Name</Text>
        <TextInput 
          name='name'
          placeholder='Bobby Brown'
          onBlur={Keyboard.dismiss}
          onChangeText={text => handleChange(text, 'name')}
          onSubmitEditing={() => handleSubmit()}
          value={form.name}
          autoCorrect={false}
          autoCapitalize={false}
          style={styles.textInput}
        />
        <Text style={styles.labels}>Email</Text>
        <TextInput 
          name='email'
          placeholder='bobbybrown@gmail.com'
          onBlur={Keyboard.dismiss}
          onChangeText={text => handleChange(text, 'email')}
          onSubmitEditing={() => handleSubmit()}
          value={form.email}
          autoCorrect={false}
          autoCapitalize={false}
          style={styles.textInput}
          keyboardType='email-address'
          />
        <Text style={styles.labels}>Username</Text>
        <TextInput 
          name='username'
          placeholder='Bobby_Brown'
          onBlur={Keyboard.dismiss}
          onChangeText={text => handleChange(text, 'username')}
          onSubmitEditing={() => handleSubmit()}
          value={form.username}
          autoCorrect={false}
          autoCapitalize={false}
          style={styles.textInput}
        />
        <Text style={styles.labels}>Password</Text>
        <TextInput 
          name='password'
          placeholder='*********'
          onBlur={Keyboard.dismiss}
          onChangeText={text => handleChange(text, 'password')}
          onSubmitEditing={() => handleSubmit()}
          value={form.password}
          autoCorrect={false}
          autoCapitalize={false}
          style={styles.textInput}
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.buttonContainer} onPress={() => handleSubmit()}>
          <Text
          style={styles.button}
          >Submit</Text>
        </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
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
  labels: {
    fontSize: 14,
    color: 'grey'
    // alignSelf: 'flex-start'
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

export default CreateAccountScreen