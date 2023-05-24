import { View, Text, StyleSheet, Dimensions, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'

const AppointmentPage = ({ navigation, route }) => {
    const {apts} = route.params
    // console.log(apts)
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../orange.jpeg')} style={styles.image}>
          <TouchableOpacity>
          <Text onPress={() => navigation.goBack()} style={styles.arrow}>←</Text>
          </TouchableOpacity>
          <Text style={styles.brandViewText}>Appointment</Text>
      </ImageBackground>

      <View style={styles.viewContainer}>
        <View style={styles.textContainer}>
          {/* <Text>AppointmentPage</Text> */}
          <Text>
            <Text style={{fontWeight: 'bold', fontSize: 22,}}>Service: </Text>
            <Text style={styles.text}>{ apts.service }</Text>
          </Text>
          <Text>
            <Text style={{fontWeight: 'bold', fontSize: 22,}}>Specialist: </Text>
            <Text style={styles.text}>{ apts.specialist }</Text>
          </Text>
          <Text>
          <Text style={{fontWeight: 'bold', fontSize: 22, }}>Date: </Text>
          <Text style={styles.text}>{ apts.date }</Text>
          </Text>
          <Text>
          <Text style={{fontWeight: 'bold', fontSize: 22, }}>Time: </Text>
          <Text style={styles.text}>{ apts.time }</Text>
          </Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // height: Dimensions.get('window').he
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
  marginTop: -20,
  textTransform: 'uppercase'
},
viewContainer: {
  // backgroundColor: '#ffffff',
  backgroundColor: '#fff',
  flex: 1.5,
  justifyContent: 'center',
  // alignItems: 'center',
  borderTopStartRadius: 60,
  borderTopEndRadius: 60,
  bottom: 60,
  // height: Dimensions.get('window').height ,
  paddingTop: 30,
  paddingLeft: 10,
  paddingRight: 10,
  justifyContent: 'flex-start',
  // paddingTop: 20
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
})

export default AppointmentPage