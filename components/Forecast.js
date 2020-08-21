import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { useNavigation } from '@react-navigation/native';

export default function Forecast(props) {
    const navigation = useNavigation()
    return (
        <View>
            <Text style={styles.innerText}>{props.main}</Text>
            <Text style={styles.innerText}>{props.description}</Text>
            <Text style={styles.innerText}>{props.temp} °C</Text>
            <Text style={styles.innerText}>{props.pressure} Pa</Text>
            <Text style={styles.innerText}>{props.visibility} Km</Text>
            <Text style={styles.innerText}>{props.country}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    innerText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 23,
        paddingBottom: 15,
        textShadowOffset: {width: 2,height: 2},
        textShadowRadius: 10,
        textShadowColor:'black',
        fontFamily: 'sans-serif-condensed'
    },
});