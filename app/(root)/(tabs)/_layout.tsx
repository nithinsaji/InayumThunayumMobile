import { Stack } from 'expo-router';
import 'react-native-reanimated';

const Layout = () => {

  return (
      <Stack>
        <Stack.Screen name="Home" options={{ headerShown: false }} />
        <Stack.Screen name="Search" options={{ headerShown: false }} />
        <Stack.Screen name="Chat" options={{ headerShown: false }} />
        <Stack.Screen name="Profile" options={{ headerShown: false }} />
      </Stack>
  );
}
export default Layout;