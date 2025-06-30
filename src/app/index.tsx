import { useEffect } from 'react';
import { useRouter } from 'expo-router';
import useAuth from './hooks/useAuth';
import { View, ActivityIndicator } from 'react-native';

export default function Index() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading) {
      if (user) {
        // console.log("Navigating to tabs")
        router.replace('/(tabs)');
      } else {
        router.replace('/login');
      }
    }
  }, [user, loading]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size="large" />
    </View>
  );
}
