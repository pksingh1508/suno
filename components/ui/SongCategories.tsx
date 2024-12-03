import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Colors from '@/constants/Colors'
import { useSongCategoryStore } from '@/store/songCategory'

export default function SongCategories({ categorie }: { categorie: string }) {
    const setCategory = useSongCategoryStore((state) => state.setCategory);

    const handler = () => {
        setCategory(categorie);
    }
    return (
        <TouchableOpacity style={styles.container} onPress={handler}>
            <Text style={styles.text}>{categorie}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 5
    },
    text: {
        fontSize: 17,
        fontFamily: 'mon-m',
        color: Colors.textLight,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: Colors.primary100,
        paddingHorizontal: 13,
        paddingVertical: 7,
        borderRadius: 8
    }
})