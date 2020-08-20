import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

export default function Forecast(props) {
    return (
        <View>
            <Text style={styles.innerText}>{props.main}</Text>
            <Text style={styles.innerText}>{props.description}</Text>
            <Text style={styles.innerText}>{props.temp} °C</Text>
            <Text style={styles.innerText}>{props.pressure} Pa</Text>
            <Text style={styles.innerText}>{props.humidity} %</Text>
            <Text style={styles.innerText}>{props.visibility} Km</Text>
            <Text style={styles.innerText}>{props.speed} m</Text>
            <Text style={styles.innerText}>{props.timezone} sec</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    innerText: {
        color: 'white'
    },
});
/*const styles = StyleSheet.create({
    container: { flexDirection: 'column', alignItems: 'center', justifyContent: 'center', },
    
});*/


