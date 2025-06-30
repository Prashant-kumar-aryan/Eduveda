import {StatusBar, Platform } from 'react-native';
import React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function safeView({ children }: { children: any }) {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex: 1,}}>
        {children}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}