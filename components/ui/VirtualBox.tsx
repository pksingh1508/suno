import { Dimensions, Image, Pressable, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useTrack } from '@/store/currentTrack';
import Colors from '@/constants/Colors';
import { AntDesign } from '@expo/vector-icons'
import { Audio } from 'expo-av';
import { useSongCategoryStore } from '@/store/songCategory';
import { Link } from 'expo-router';

const width = Dimensions.get('window').width;

export default function VirtualBox() {
    const track = useTrack((state) => state.currentTrack);
    const [sound, setSound] = useState<Audio.Sound | null>(null);
    const [playing, setIsPlaying] = useState(true);

    useEffect(() => {
        // let isMounted = true;

        async function loadSong() {
            try {
                if (sound) {
                    await sound.unloadAsync();
                    setSound(null);
                }
                const { sound: newSound } = await Audio.Sound.createAsync({ uri: track.url });
                setIsPlaying(true);
                setSound(newSound);

            } catch (error) {
                console.error('Error loading sound', error);
            }
        }

        loadSong();

        return () => {
            // isMounted = false;
            if (sound) {
                sound.unloadAsync();
            }
        };
    }, [track.url]);

    async function playSound() {
        if (sound) {
            setIsPlaying(false);
            await sound.playAsync();
        }
    }

    async function pauseSound() {
        if (sound) {
            setIsPlaying(true);
            await sound.pauseAsync();
        }
    }



    return (
        <Link href={'/player'}>
            <View style={styles.virtualBox}>
                <View style={styles.left}>
                    <Image
                        source={{ uri: `${track.imageUrl}` }}
                        resizeMode='contain'
                        style={{ width: 59, height: 59, borderRadius: 6 }}
                    />
                    <Text style={styles.text}>{track.name.slice(0, 20)}...</Text>
                </View>
                <View style={styles.icons}>
                    {playing ? (
                        <TouchableOpacity onPress={playSound}>
                            <AntDesign name="play" size={34} color={Colors.text100} />
                        </TouchableOpacity>

                    ) : (
                        <TouchableOpacity onPress={pauseSound}>
                            <AntDesign name="pausecircle" size={34} color={Colors.text100} />
                        </TouchableOpacity>

                    )}
                </View>
            </View>
        </Link>
    )
}

const styles = StyleSheet.create({
    virtualBox: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        height: 59,
        width: width - 10,
        backgroundColor: Colors.primary400,
        marginHorizontal: 6,
        borderRadius: 6,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    left: {
        flexDirection: 'row',
        gap: 9,
        alignItems: 'center'
    },
    text: {
        fontSize: 18,
        fontFamily: 'mon-m',
        color: Colors.text100
    },
    icons: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingRight: 10
    }
});