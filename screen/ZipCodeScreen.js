import React from 'react'
import { FlatList, View, Text, StyleSheet, ImageBackground, Button } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import { TouchableHighlight } from 'react-native-gesture-handler';

const availableZipItems = [
    { place: 'Hatyai', code: '90110' }, 
    { place: 'Trang', code: '92000' }, 
    { place: 'Chiangmai', code: '50000' }, 
    { place: 'Khonkaen', code: '40000' }, 
    { place: 'Chonburi', code: '20000' },
    { place: 'Songkhla', code: '90000' },
    { place: 'Krabi', code: '81000' },
    { place: 'Pattani', code: '94000' },
    { place: 'Bangkok', code: '10110' }, 

   
]

const ZipItem = ({place, code, navigation}) => (
    <TouchableHighlight onPress={() => navigation.navigate('Weather', { zipCode: code})}>
        <View style={styles.zipItem}> 
            <Text style={styles.zipPlace}>City Name: {place}</Text>
            <Text style={styles.zipCode}>Zip Code: {code}</Text> 
        </View>
    </TouchableHighlight>
)

const _keyExtractor = item => item.code

export default function ZipCodeScreen(){ 
    const navigation = useNavigation()
    return ( 
        <ImageBackground source={require('../nsky.jpg')} style={styles.backdrop}>
            <View>
                <FlatList
                    data={availableZipItems}
                    keyExtractor={_keyExtractor}
                    renderItem={({item}) => <ZipItem {...item} navigation={navigation}/>}
                />
                <StatusBar style="auto" />
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    zipItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 10,
        paddingBottom: 35,
        
    },
    zipPlace: {
        fontSize: 18,
        paddingLeft:25,
        color: 'white',
        textShadowOffset: {width: 2,height: 2},
        textShadowRadius: 10,
        textShadowColor:'black',
    },
    zipCode: {
        fontSize: 18,
        paddingRight:25,
        color: 'white',
        textShadowOffset: {width: 2,height: 2},
        textShadowRadius: 10,
        textShadowColor:'black',
    },
    backdrop: {
        flexDirection:'column',
        justifyContent: 'space-evenly',
        alignItems:'center',
        width: '100%',
        height: '100%',
    },
})