import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import useAuth from './hooks/useAuth';

const login = () => {
  const { login, loading } = useAuth();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <View style={styles.header}>
        <Text style={styles.title}>Welcome to AadiApp</Text>
        <Text style={styles.subtitle}>Sign in to get started</Text>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={login}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={styles.loginButtonText}>Sign in with Google</Text>
          )}
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f7',
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  header: {
    marginBottom: 60,
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#1a1a1a',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    marginTop: 10,
    textAlign: 'center',
  },
  footer: {
    alignItems: 'center',
  },
  loginButton: {
    backgroundColor: '#4285F4',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    width: '100%',
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default login;
