import react from 'react'
import {View, Text} from 'react-native'

export default function Array(){
    let cars = ['BMW','MG','Benz','Honda']
    return(
        <View>
            <Text> รถลำดับที่ 1 = {cars[0]}</Text>
            <Text> รถลำดับที่ 2 = {cars[1]}</Text>
            <Text> รถลำดับที่ 3 = {cars[2]}</Text>
            <Text> รถลำดับที่ 4 = {cars[3]}</Text>
        </View>
    )
}