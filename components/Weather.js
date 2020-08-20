import React, {useState, useEffect} from 'react'
import {Text, ImageBackground, StyleSheet} from 'react-native'
import Forecast from './Forecast'

export default function Weather(props) {
    const [forecastInfo, setForecastInfo] = useState({
        main: '-',
        description: '-',
        temp: 0,
        pressure: 0,
        humidity: 0,
        visibility: 0,
        speed: 0, 
        timezone: 0
    })

    useEffect(() => {
        console.log(`fetching data with zipCode = ${props.zipCode}`) 
        if (props.zipCode) {
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=9d886aa0edf518b8eb256622b548da61`) 
            .then((response) => response.json()) 
            .then((json) => {
                setForecastInfo({ 
                    main: json.weather[0].main, 
                    description: json.weather[0].description, 
                    temp: json.main.temp,
                    pressure: json.main.pressure,
                    humidity: json.main.humidity,
                    visibility: json.visibility,
                    speed: json.wind.speed,
                    timezone: json.timezone
                });
            })
            .catch((error) => { 
                console.warn(error); 
            });
        }
    }, [props.zipCode])

    return (
        <ImageBackground source={require('../nsky.jpg')} style={styles.backdrop}>
            <Text style={styles.innerText}>Zip Code is </Text>
            <Text style={styles.innerText}>{props.zipCode}</Text>
            <Forecast {...forecastInfo} />
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    backdrop: {
        flexDirection:'column',
        justifyContent:'space-evenly',
        alignItems:'center',
        width: '100%',
        height: '100%'
    },
    innerText: {
        color: 'white',
        alignItems:'center',
    },
});
/*const styles = StyleSheet.create({
    container: { flex: 1, alignItems: 'center', width: '100%', height: '100%' },
    backdrop: {
        width: '100%', height: '50%', opacity: 0.3, backgroundColor: '#000',
        flexDirection: 'column', alignItems: 'center', justifyContent: 'center'
    },
    setLayout: { width: '100%', height: '100%' }

});*/
