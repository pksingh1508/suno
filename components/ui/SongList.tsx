import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { convertSecondToTime } from '@/utils/timeDuration'
import Colors from '@/constants/Colors';
import { useTrack } from '@/store/currentTrack';

export default function SongList({ item }: { item: any }) {
    let duration = convertSecondToTime(item.duration);
    const { setCurrentTrack, reset } = useTrack();
    const addToTrack = () => {
        reset();
        setCurrentTrack({
            name: item.name,
            duration: duration,
            url: item.downloadUrl[2].url,
            imageUrl: item.image[2].url
        })
    }
    return (
        <TouchableOpacity style={styles.container} onPress={addToTrack}>
            <View style={styles.left}>
                <Image
                    source={{ uri: `${item.image[2].url}` }}
                    resizeMode='contain'
                    style={{ width: 40, height: 40, borderRadius: 8 }}
                />
                <Text style={styles.text}>{item.name.slice(0, 20)}...</Text>
                <Text style={{ color: 'white' }}>{item.index}</Text>
            </View>
            <Text style={styles.text}>{duration}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 17,
        paddingHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    left: {
        flexDirection: 'row',
        gap: 9,
        alignItems: 'center'
    },
    text: {
        fontSize: 18,
        fontFamily: 'mon-m',
        color: Colors.textLight
    }
})