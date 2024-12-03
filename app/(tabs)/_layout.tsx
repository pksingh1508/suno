import { Tabs } from 'expo-router';
import React from 'react';
import { AntDesign, Ionicons, Entypo } from '@expo/vector-icons';
import { Text } from 'react-native';

export default function TabLayout() {

  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#000100',
          borderColor: 'transparent',
          height: 60,
        },
        tabBarLabelPosition: 'below-icon',
        tabBarActiveTintColor: '#00edb3',
        tabBarLabelStyle: {
          textAlign: 'center'
        },
        tabBarInactiveTintColor: '#fffefe',
        tabBarLabel: ({ focused }) => focused ?
          <Text style={{ color: '#00edb3', fontFamily: 'mon-m', fontSize: 16 }}>{
            route.name === '(songs)' ? 'Songs' : route.name === 'explore' ? 'Explore' : 'others'
          }</Text> : null
      })}>

      <Tabs.Screen
        name="(songs)"
        options={{
          title: 'Songs',
          tabBarIcon: ({ color }) => <Entypo name="folder-music" size={22} color={color} />
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color }) => <Ionicons name="search-sharp" size={22} color={color} />
        }}
      />
    </Tabs>
  );
}

