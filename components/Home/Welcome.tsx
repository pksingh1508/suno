import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SimpleLineIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import Colors from '@/constants/Colors';
import { Link } from 'expo-router';

const Welcome = () => {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={require('../../assets/images/music.png')} style={styles.image} />
                <Text style={styles.welcomeText}>WELCOME!</Text>
            </View>
            {/* <View style={styles.iconsContainer}>
                <Link href={'/Setting'}>
                    <SimpleLineIcons name="settings" size={22} color={Colors.text100} />
                </Link>
            </View> */}
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    imageContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4
    },
    iconsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 17
    },
    image: {
        width: 40,
        height: 35
    },
    welcomeText: {
        fontSize: 19,
        color: Colors.text100,
        fontFamily: 'mon-b'
    }
})

export default Welcome;