import React from 'react'
import { 
    StyleSheet, 
    Button, 
    View, 
    TouchableOpacity, 
    SafeAreaView,
    Text
  } from 'react-native';
import { UserContext } from '../UserContext';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
    <View style={styles.topHalf}>
      <Button title='Log In' style={styles.logIn} onPress={() => navigation.replace('login')}/>
    </View>
    <View style={styles.bottomHalf}>
      <Button title='Create Account' style={styles.createAccount} onPress={() => navigation.replace('createAccount')}/>
    </View>
  </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    topHalf: {
      backgroundColor: "#ff006e",
      height: "50%",
      flex: 1,
      justifyContent: 'center'
    },
    bottomHalf: {
      backgroundColor: "#3a86ff",
      height: "50%",
      flex: 1,
      justifyContent: 'center'
    },
    logIn: {
      fontSize: 30
    },
    createAccount: {

    },
  });
  

export default HomeScreen