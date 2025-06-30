import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import { Alert } from 'react-native';

GoogleSignin.configure({
  webClientId: '177721209181-eao90bs2nap1igkmjj0ke68j1d0r0jdf.apps.googleusercontent.com',
  iosClientId: '177721209181-nr175pscj6594fvedj65b5u68kq05m90.apps.googleusercontent.com',
  offlineAccess: true,
});

interface AuthContextType {
  user: any;
  login: () => Promise<void>;
  logout: () => Promise<void>;
  loading: boolean;
}

export const AuthContext = createContext<AuthContextType | null>(null);

const AuthProvider = ({ children }: { children: any }) => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUser = async () => {
      try {
        const storedUser = await AsyncStorage.getItem('aadiuser');
        if (storedUser) setUser(JSON.parse(storedUser));
      } catch (e) {
        console.log('Error loading user:', e);
      } finally {
        setLoading(false);
      }
    };
    loadUser();
  }, []);

  const login = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const response = await GoogleSignin.signIn();
      setUser(response?.data || null);
      await AsyncStorage.setItem('aadiuser', JSON.stringify(response?.data));
    } catch (error: any) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        Alert.alert('Cancelled', 'User cancelled the login.');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        Alert.alert('In Progress', 'Sign in is already in progress.');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        Alert.alert('Error', 'Play Services not available or outdated.');
      } else {
        Alert.alert('Error', 'Something went wrong. Please try again.');
      }
    }
  };

  const logout = async () => {
    try {
      await GoogleSignin.signOut();
      await AsyncStorage.removeItem('aadiuser');
      setUser(null);
    } catch (error) {
      Alert.alert('Error', 'Failed to log out.');
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};


export default AuthProvider;