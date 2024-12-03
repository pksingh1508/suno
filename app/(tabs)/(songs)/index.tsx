// import axios from 'axios'
import { View, Text, StyleSheet, ScrollView, ActivityIndicator, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import Welcome from '@/components/Home/Welcome';
import Error from '@/components/ui/Error';
import SongList from '@/components/ui/SongList';
import { useSongCategoryStore } from '@/store/songCategory';
import VirtualBox from '@/components/ui/VirtualBox';
import { useTrack } from '@/store/currentTrack';



const SongScreen = () => {
    const category = useSongCategoryStore((state) => state.category);
    const track = useTrack((state) => state.currentTrack);
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const getData = async () => {
            setLoading(true);
            try {
                const result = await fetch(`https://saavn.dev/api/search/songs?query=${category}&limit=1000`);
                const json = await result.json();
                setData(json.data.results);
            } catch (err) {
                setError('Something went wrong');
            }
            setLoading(false);
        }
        getData();
    }, [category])

    if (loading) {
        return (
            <View style={[styles.container, { alignItems: 'center', justifyContent: 'center' }]}>
                <LinearGradient
                    // Background Linear Gradient
                    colors={['rgba(46,47,47,255)', 'rgba(2,2,2,255)']}
                    style={styles.background}
                />
                <ActivityIndicator color={'white'} size={'large'} />
            </View>
        )
    }
    if (error) {
        return <Error />
    }

    return (
        <View style={styles.container}>
            <LinearGradient
                // Background Linear Gradient
                colors={['rgba(46,47,47,255)', 'rgba(2,2,2,255)']}
                style={styles.background}
            />
            <View style={{ paddingTop: 50 }} />
            <Welcome />
            <FlatList
                data={data}
                renderItem={({ item }) => <SongList item={item} />}
                style={styles.flatList}
            />
            {track.name && <VirtualBox />}

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
    flatList: {
        marginVertical: 10,
        flex: 1
    },
    categoryScroll: {
        marginTop: 18,
        // padding: 9,
        paddingBottom: 5,
        flexGrow: 0,
    },
    scrollContent: {
        flexGrow: 1,
        justifyContent: 'center',
    }
})

export default SongScreen;