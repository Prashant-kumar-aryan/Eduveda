import SafeView from './components/safeView';
import { Stack } from 'expo-router';
import AuthProvider from './context/AuthContext';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';

export default function Layout() {
  return (
    <SafeView>
      <AuthProvider>
          <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="index" />           
            <Stack.Screen name="(tabs)" />
            <Stack.Screen name="login" />
          </Stack>
      </AuthProvider>
    </SafeView>
  );
}

// import SafeView from './components/safeView';
// import AuthProvider from './context/AuthContext';

// export default function Layout({ children }:{children :any}) {
//   return (
//     <SafeView>
//       <AuthProvider>
//         {children}
//       </AuthProvider>
//     </SafeView>
//   );
// }