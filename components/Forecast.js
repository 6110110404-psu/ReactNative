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
            <Text style={styles.innerText}>{props.country}</Text>
        </View>
    );
}

/*const styles = StyleSheet.create({
    innerText: {
        color: 'white'
    },
});*/
/*const styles = StyleSheet.create({
    container: { flexDirection: 'column', alignItems: 'center', justifyContent: 'center', },
    
});*/
/*const styles = StyleSheet.create({
    container: { paddingTop: 25},
    backdrop: { width: '100%', height: '100%'},
    center: { flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: 80000 },
    center2: { flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: 8000}
    
});*/
const styles = StyleSheet.create({
    main: { color: 'white', fontSize: 32, paddingTop: 10, paddingLeft: 15},
    description: { color: 'white', paddingTop: 25, fontSize: 20},
    temp: { color: 'white', fontSize: 32},
    cel: {color: 'white'},
    alignRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingTop: 25},
    alignColum: {flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}
    
});

