import React from 'react'
import { 
    StyleSheet, 
    Button, 
    View, 
    TouchableOpacity, 
    SafeAreaView,
    Text,
    ScrollView,
    ImageBackground,
    Dimensions
  } from 'react-native';
import { UserContext } from '../UserContext';


import { NativeBaseProvider, Box } from "native-base";

const HomeScreen = ({ navigation }) => {
  return (
    <NativeBaseProvider>
        <View style={styles.container}>
          {/* <ImageBackground source={require('../orange.jpeg')} style={styles.image}> */}
          <ImageBackground source={require('../purblue.jpeg')} style={styles.image}>
            <View style={styles.brandView}>
              {/* <Icon name='location-sharp' style={styles.icon} /> */}
              <Text style={styles.brandViewText}>MENTORS</Text>
            </View>
          </ImageBackground>
          <View style={styles.bottomView}>
            <View style={{padding: 40}}>
              {/* <Text style={{color: '#c2410c', fontSize: 34}}>Welcome</Text> */}
              <Text style={{color: '#8338ec', fontSize: 34}}>Welcome</Text>
            </View>
              <View style={styles.touchables}>
                  <TouchableOpacity style={styles.loginContainer} onPress={() => navigation.navigate('LoginScreen')}>
                        <Text style={styles.login}>Log In</Text>
                  </TouchableOpacity>
                  <View style={styles.registerContainer}>
                    <Text>
                      Don't have an account?
                      <TouchableOpacity >
                          <Text style={{color: 'red', fontStyle: 'italic', fontSize: 15}} onPress={() => navigation.navigate('CreateAccountScreen')}>  Register now</Text>
                      </TouchableOpacity>
                    </Text>
                  </View>
              </View>
          </View>
            {/* <Button title='Log In' style={styles.logIn} onPress={() => navigation.navigate('LoginScreen')}/>
            <Button title='Create Account' style={styles.createAccount} onPress={() => navigation.navigate('CreateAccountScreen')}/> */}
      </View>
  </NativeBaseProvider>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffffff'
    },
    image: {
      height: Dimensions.get('window').height / 2.5
    },
    // icon: {
    //   color: '#ffffff',
    //   fontSize: 100,
    // },
    brandView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    brandViewText: {
      color: '#ffffff',
      fontSize: 40,
      fontWeight: 'bold',
    },
    bottomView: {
      flex: 1.5,
      backgroundColor: '#ffffff',
      bottom: 50,
      borderTopStartRadius: 60,
      borderTopEndRadius: 60,
    },
    touchables: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    loginContainer: {
      flex: 0.12,
      // backgroundColor: '#ea580c',
      backgroundColor: '#8338ec',
      justifyContent: 'center',
      alignItems: 'center',
      height: 10,
      marginBottom: 10,
      borderRadius: 8,
      shadowOffset: {width: 1, height: 10},
      shadowOpacity: 0.4,
      shadowRadius: 3,
      elevation: 15,
    },
    login: {
      marginHorizontal: 30,
      // paddingBottom: 30,
      color: '#ffffff',
      fontSize: 18,
      // alignSelf: 'center'
    },
    registerContainer: {
      paddingTop: 15
    },
  });
  

export default HomeScreen