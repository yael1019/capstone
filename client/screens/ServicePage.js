import { View, Text, ScrollView, SafeAreaView, Pressable, TextInput, StyleSheet, Platform, TouchableOpacity } from 'react-native'
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
    <SafeAreaView style={styles.constainer}>
    <ScrollView>
        <View>
            <Text>{service.name}</Text>
            <Text>{ service.about }</Text>
            <Text>${ service.price }</Text>
        </View>
        <View>
            <SelectList 
                setSelected={(val) => setSelected(val)}
                data={data}
                placeholder={'Select a Physician Assistant'}
            />
        </View>
        <View>
            <Text>Select a Date and Time</Text>
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
                             placeholder='Select a Date and Time'
                             value={aptDate}
                             onChangeText={handleAptDate}
                             editable={false}
                             onPressIn={toggleDatePicker}
                        />
                    </Pressable>
                )
            }
        </View>
        <View>
            <TouchableOpacity>
                <Text onPress={handleSubmit}>Submit</Text>
            </TouchableOpacity>
        </View>
    </ScrollView>
    </SafeAreaView>
  )
}

export default ServicePage

const styles = StyleSheet.create({
    constainer: {
        flex: 1
    },
    datePicker: {
        height: 200,
        marginTop: -10
    },
})