import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '@/constants/Colors';

const LastSessionCard = () => {

    return (
        <View style={styles.container}>
            <View>
                <TouchableOpacity style={styles.singleContainer}>
                    <Image source={require('../../assets/coverImages/animeOt.png')} style={styles.image} />
                    <Text style={styles.text}>Anime Song</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.singleContainer}>
                    <Image source={require('../../assets/coverImages/anythingGoes.png')} style={styles.image} />
                    <Text style={styles.text}>Anything Goes</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.singleContainer}>
                    <Image source={require('../../assets/coverImages/Hindi.png')} style={styles.image} />
                    <Text style={styles.text}>Hindi Song</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity style={styles.singleContainer}>
                    <Image source={require('../../assets/coverImages/LofiBeats.png')} style={styles.image} />
                    <Text style={styles.text}>Lofi Beats</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.singleContainer}>
                    <Image source={require('../../assets/coverImages/myImage1.png')} style={styles.image} />
                    <Text style={styles.text}>Old Song</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.singleContainer}>
                    <Image source={require('../../assets/coverImages/NoTimeTodie.png')} style={styles.image} />
                    <Text style={styles.text}>No Time To Die</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    singleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 8,
        marginHorizontal: 12,
        gap: 8,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: Colors.primary400,
        borderRadius: 10,
        backgroundColor: Colors.backgroundDark
    },
    text: {
        color: Colors.text100,
        fontSize: 15,
        fontFamily: 'mon-sb',
        paddingRight: 10
    },
    image: {
        width: 51,
        height: 51,
        borderRadius: 10
    }
})

export default LastSessionCard;