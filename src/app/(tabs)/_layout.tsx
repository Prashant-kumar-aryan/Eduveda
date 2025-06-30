import FontAwesome from '@expo/vector-icons/FontAwesome'
import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

export default function TabRoot() {
  return (
    <Tabs>
        <Tabs.Screen name="index" 
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="home" size={size} color={color} />
          ),
          headerShown: false,
        }}/>
        <Tabs.Screen name="courses" 
        options={{
          title: 'Courses',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="book" size={size} color={color} />
          ),
          headerShown: false,
        }}/>
        <Tabs.Screen name="myLearning" 
        options={{
          title: 'myLearning',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="info" size={size} color={color} />
          ),
          headerShown: false,
        }}/>
        <Tabs.Screen name="profile" 
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user" size={size} color={color} />
          ),
          headerShown: false,
        }}/>
    </Tabs>
  )
}