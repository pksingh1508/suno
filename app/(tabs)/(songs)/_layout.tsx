import { Stack } from "expo-router";


export default function SongLayout() {
    return (
        <Stack screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="index" options={{
                title: "Songs",
                headerTitleAlign: 'center',
            }} />
        </Stack>
    )
}