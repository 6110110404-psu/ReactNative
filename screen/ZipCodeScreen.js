import React from 'react'
import { FlatList, View, Text, StyleSheet,} from 'react-native'
import { TouchableHighLight } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'


const availableZipItems = [
    { place: 'Hatyai', code: '90110' },
    { place: 'Trang', code: '92000' },
    { place: 'Chiangmai', code: '50000' },
    { place: 'Khonkaen', code: '40000' },
    { place: 'Chonburi', code: '20000' },
]

const ZipItem = ({place, code , navigation}) => (
    <TouchableHighLight onPress={() => {
        navigation.navigate('Weather', {ZipCode: code})
    }}>
        <View style={styles.zipItem}>
            <Text>{place}</Text>
            <Text>{code}</Text>
        </View>
    </TouchableHighLight>
)
export default function ZipCodeScreen(){
    const navigation = useNavigation()
    return(
        <FlatList
            data = {availableZipItems}
            keyExtractor = {item => item.code}
            renderItem = {({item}) => <ZipItem {...item} navigation={navigation}/>}
        />
    )
}

const styles = StyleSheet.create({
    zipItem: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
    zipPlace: {
        flex: 1,
    }
    ZipCode: {
        flex: 1,
    }
})