import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { useEffect } from 'react';
import { useColorScheme } from 'react-native';
import { Drawer } from 'expo-router/drawer';
import Colors from '../constants/Colors';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Drawer
        screenOptions={{
          headerShown: false, // hide the default side bar
          drawerStyle: {
            backgroundColor: Colors[colorScheme ?? 'light'].background,
          },
        }}
      >
        <Drawer.Screen
          name="(tabs)"
          options={{
            drawerLabel: 'Home',
            title: 'Overview',
            drawerInactiveTintColor: '#888', // others button
            drawerActiveTintColor: '#000',
            drawerLabelStyle: {
              fontSize: 20, // Adjust text size
              fontWeight: 'bold', // Make text bold
              color: '#FFA400',
              padding: 5,
            },
            drawerIcon: ({ color, size }) => (
              <FontAwesome name="home" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="create-group"
          options={{
            drawerLabel: 'Create New Group',
            title: 'Create New Group',
            drawerInactiveTintColor: '#888', // others button
            drawerActiveTintColor: '#000',
            drawerLabelStyle: {
              fontSize: 20, // Adjust text size
              fontWeight: 'bold', // Make text bold
              color: '#FFA400',
              padding: 5,
            },
            drawerIcon: ({ color, size }) => (
              <FontAwesome name="plus" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="[...missing]"
          options={{
            drawerItemStyle: { display: 'none' }, // This hides the item from the drawer
            title: 'Oops!', // You can still set a title for the actual screen
          }}
        />
      </Drawer>
    </ThemeProvider>
  );
}
