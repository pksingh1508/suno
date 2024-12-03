import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { useNavigation } from '@react-navigation/native';
import { useTrack } from '@/store/currentTrack';
import Colors from '@/constants/Colors';

const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');


export default function Player() {
    const navigation = useNavigation();
    const { currentTrack } = useTrack();
    const name = currentTrack.name;

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitleAlign: 'center',
            headerTitle: `${name}`,
            headerStyle: {
                backgroundColor: Colors.primary400
            },
            headerTitleStyle: {
                fontSize: 22,
                fontFamily: 'mon-sb',
                color: Colors.text100
            },
            headerBackTitleStyle: {
                color: Colors.text100
            }
        });
    }, [navigation]);

    return (
        <View style={styles.container}>
            <LinearGradient
                // Background Linear Gradient
                colors={['rgba(46,47,47,255)', 'rgba(2,2,2,255)']}
                style={styles.background}
            />
            <View style={{ paddingTop: 20 }} />
            <View style={styles.mainContainer}>
                <Image
                    source={{ uri: `${currentTrack.imageUrl}` }}
                    width={width - 30}
                    height={height - 400}
                    style={styles.image}
                />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: '100%',
    },
    mainContainer: {
        alignItems: 'center'
    },
    image: {
        borderRadius: 8
    }
})