import { View, Text, ScrollView, SafeAreaView, Pressable, TextInput, StyleSheet, Platform, TouchableOpacity, ImageBackground, Dimensions } from 'react-native'
import React, { useState, useEffect, useContext } from 'react'
import { SelectList } from 'react-native-dropdown-select-list'
import DateTimePicker from '@react-native-community/datetimepicker';
// import { TouchableOpacity } from 'react-native-web';
import { UserContext } from '../UserContext';

const ServicePage = ({ navigation, route }) => {
    const [currentUser, setCurrentUser, currentApts, setCurrentApts] = useContext(UserContext)
    const {service} = route.params
    const [specialist, setSpecialist] = useState([])
    const [selected, setSelected] = useState('')
    const [date, setDate] = useState(new Date())
    const [showPicker, setShowPicker] = useState(false)
    const [aptDate, setAptDate] = useState('')
    const [aptTime, setAptTime] = useState('')

    const toggleDatePicker = () => {
        setShowPicker(!showPicker)
    }
    const onChange = ({type}, selectedDate) => {
        if(type == 'set') {
            const currentDate = selectedDate
            // console.log(currentDate.getHours() + ':' + currentDate.getMinutes())
            setDate(currentDate)
            setAptTime(currentDate.getHours() + ':' + currentDate.getMinutes())
        } else {
            toggleDatePicker()
        }
    }
    const handleAptDate = (text) => {
        // console.log(text)
        setAptDate(text)
    }
    const confirmDate = () => {
        setAptDate(date.toDateString())
        toggleDatePicker()
        // console.log(aptDate)
        // console.log(aptTime)
    }

    const handleSubmit = () => {
        const form = {
            user_id: currentUser.id,
            specialist_id: selected,
            service_id: service.id,
            date: aptDate,
            time: aptTime,
            completed: 'no'
        }
        // console.log(form)
        fetch('http://localhost:3001/appointments', {
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
                    .then(data => setCurrentApts([...currentApts, data]))
                }
            })
        
        fetch(`http://localhost:3001/emailing/${currentUser.id}`)
            .then(res => res.json())
            .then(data => console.log(data))
        setSelected(() => setSelected(''))
        setAptDate('')
        setAptTime('')
        navigation.goBack()
    }

    useEffect(() => {
        fetch('http://localhost:3001/specialists')
            .then(resp => resp.json())
            .then(data => setSpecialist(data))
    }, [])
    const data = specialist.map(spec => {
        return {
            key: spec.id,
            value: spec.name
        }
    })
    // console.log(selected)
  return (
    // <SafeAreaView style={styles.container}>
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground source={require('../orange.jpeg')} style={styles.image}>
          <TouchableOpacity>
          <Text onPress={() => navigation.goBack()} style={styles.arrow}>←</Text>
          </TouchableOpacity>
          <Text style={styles.brandViewText}>{service.name}</Text>
        </ImageBackground>
        <View style={styles.viewContainer}>
        <View style={styles.textContainer}>
            {/* <Text>{service.name}</Text> */}
            <Text style={styles.text}>{ service.about }</Text>
            <View style={styles.line}></View>
            <Text style={styles.title}>Book Your Appointment Today:</Text>
            <Text style={styles.title2}>Price:  ${ service.price }</Text>
        </View>
        <View style={styles.select}>
            <SelectList 
                setSelected={(val) => setSelected(val)}
                data={data}
                placeholder={'Select a Physician Assistant'}
                // style={{
                //     // borderBottomWidth: 1,
                //     // borderBottomColor: '#ea580c',
                //     // height: 30,
                // }}
            />
        </View>
        <View style={styles.dateTime}>
            <Text style={styles.title2}>Select a Date and Time</Text>
            {
                showPicker && (
                    <DateTimePicker 
                        mode='datetime'
                        display='spinner'
                        value={date}
                        onChange={onChange}
                        style={styles.datePicker}
                        // maximumDate={new Date(2023-30-6)}
                        minimumDate={new Date()}
                        // is24Hour={true}
                    />
                )
            }
            {
                showPicker && Platform.OS === 'ios' && (

                    <View
                        style={{flexDirection:'row', justifyContent: 'space-around'}}
                    >
                        <TouchableOpacity
                            onPress={toggleDatePicker}
                        >
                            <Text>Cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={confirmDate}
                        >
                            <Text>Confirm</Text>
                        </TouchableOpacity>
                    </View>
                )
            }
            {
                !showPicker && (
                    <Pressable
                        onPress={toggleDatePicker}
                    >
                        <TextInput
                             placeholder='Mon June 5 10:15AM'
                             value={aptDate}
                             onChangeText={handleAptDate}
                             editable={false}
                             onPressIn={toggleDatePicker}
                             style={{
                                borderBottomWidth: 1,
                                borderBottomColor: '#ea580c',
                                height: 30,
                                fontSize: 16
                             }}
                        />
                    </Pressable>
                )
            }
        </View>
        <View>
            <TouchableOpacity style={styles.buttonContainer}>
                <Text style={styles.button} onPress={handleSubmit}>Submit</Text>
            </TouchableOpacity>
        </View>
        </View>
    </ScrollView>
        </View>
    // </SafeAreaView>
  )
}

export default ServicePage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // height: Dimensions.get('window').he
    },
    datePicker: {
        height: 200,
        marginTop: -10,
        // borderWidth: 1,
        // borderBottomColor: 'black'
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
        backgroundColor: '#ffffff',
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
      },
      textContainer: {
        marginBottom: 20
      },
      text: {
        fontSize: 15,
        padding: 5
      },
      title: {
        fontSize: 18,
        padding: 5,
        fontWeight: 'bold',
        alignSelf: 'center',
      },
      title2: {
        fontSize: 16,
        padding: 5,
        fontWeight: 'bold',
        // alignSelf: 'center'
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
        alignSelf: 'center'
      },
      button: {
        // alignSelf: 'center'
        // marginHorizontal: 30,
        // paddingBottom: 30,
        color: '#ffffff',
        fontSize: 18,
      },
      select: {
        paddingBottom: 20
      },
      dateTime: {
        paddingBottom: 20
      },
      line: {
        borderTopWidth: 1.5,
        borderTopColor: '#ea580c',
        // shadowOffset: {width: 1, height: -10},
        // shadowOpacity: 0.9,
        // shadowRadius: 7,
      },
})