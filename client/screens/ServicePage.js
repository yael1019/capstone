import { View, Text, ScrollView, SafeAreaView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { SelectList } from 'react-native-dropdown-select-list'

const ServicePage = ({ navigation, route }) => {
    const {service} = route.params
    const [specialist, setSpecialist] = useState([])
    const [selected, setSelected] = useState('')
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
    <SafeAreaView>
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
    </ScrollView>
    </SafeAreaView>
  )
}

export default ServicePage