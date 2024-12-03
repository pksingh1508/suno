import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import Welcome from '@/components/Home/Welcome'
import { useTrack } from '@/store/currentTrack';
import VirtualBox from '@/components/ui/VirtualBox';
import Colors from '@/constants/Colors';
import SongList from '@/components/ui/SongList';

export default function ExploreScreen() {
    const track = useTrack((state) => state.currentTrack);
    const [searchValue, setSearchValue] = useState('');
    const [data, setData] = useState(null);
    const [error, setError] = useState('');

    useEffect(() => {
        const getData = async () => {
            try {
                const result = await fetch(`https://saavn.dev/api/search/songs?query=${searchValue}&limit=1000`);
                const json = await result.json();
                setData(json.data.results);
            } catch (err) {
                setError('Something went wrong');
            }
        }
        getData();
    }, [searchValue])

    return (
        <View style={styles.container}>
            <LinearGradient
                // Background Linear Gradient
                colors={['rgba(46,47,47,255)', 'rgba(2,2,2,255)']}
                style={styles.background}
            />
            <View style={{ paddingTop: 50 }} />
            <Welcome />
            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.input}
                    placeholder='&#128269; Search'
                    value={searchValue}
                    onChangeText={setSearchValue}
                    cursorColor={Colors.text100}
                    placeholderTextColor={Colors.text100}
                />
            </View>
            <FlatList
                data={data}
                renderItem={({ item }) => <SongList item={item} />}
                style={styles.flatList}
            />

            {/* {track.name && <VirtualBox />} */}

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
    searchContainer: {
        marginVertical: 15,
        marginHorizontal: 9
    },
    input: {
        backgroundColor: Colors.primary400,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: Colors.textLight,
        borderRadius: 8,
        paddingLeft: 10,
        fontSize: 16,
        fontFamily: 'mon-sb',
        color: Colors.text100
    },
    flatList: {
        marginVertical: 10,
        flex: 1
    },
})