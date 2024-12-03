import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import LastSessionCard from './LastSessionCard'

const RecentSongs = () => {

    return (
        <ScrollView>
            <LastSessionCard />
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {

    }
})

export default RecentSongs;