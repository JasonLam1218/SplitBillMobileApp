import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs, useNavigation } from 'expo-router';
import { Pressable, useColorScheme, View } from 'react-native';
import { DrawerNavigationProp } from '@react-navigation/drawer';

import Colors from '@/constants/Colors';

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const navigation = useNavigation<DrawerNavigationProp<any>>();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerStyle: {
          backgroundColor: '#fff',
        },
        tabBarStyle: {
          backgroundColor: '#fff',
        },
        headerTintColor: '#000',
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          headerRight: () => (
            <View style={{ flexDirection: 'row', marginRight: 15 }}>
              <Pressable style={{ marginRight: 15 }}>
                {({ pressed }) => (
                  <FontAwesome
                    name="search"
                    size={25}
                    color={Colors[colorScheme ?? 'light'].text}
                    style={{ opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="bell"
                    size={25}
                    color={Colors[colorScheme ?? 'light'].text}
                    style={{ opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </View>
          ),
          headerLeft: () => (
            <Pressable style={{ marginLeft: 15 }} onPress={() => navigation.openDrawer()}>
              {({ pressed }) => (
                <FontAwesome
                  name="th"
                  size={25}
                  color={Colors[colorScheme ?? 'light'].text}
                  style={{ opacity: pressed ? 0.5 : 1 }}
                />
              )}
            </Pressable>
          ),
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          headerRight: () => (
            <View style={{ flexDirection: 'row', marginRight: 15 }}>
              <Pressable style={{ marginRight: 15 }}>
                {({ pressed }) => (
                  <FontAwesome
                    name="search"
                    size={25}
                    color={Colors[colorScheme ?? 'light'].text}
                    style={{ opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="bell"
                    size={25}
                    color={Colors[colorScheme ?? 'light'].text}
                    style={{ opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </View>
          ),
          headerLeft: () => (
            <Pressable style={{ marginLeft: 15 }} onPress={() => navigation.openDrawer()}>
              {({ pressed }) => (
                <FontAwesome
                  name="th"
                  size={25}
                  color={Colors[colorScheme ?? 'light'].text}
                  style={{ opacity: pressed ? 0.5 : 1 }}
                />
              )}
            </Pressable>
          ),
        }}
      />
      <Tabs.Screen 
        name="three"
        options={{
          title: "Tab three", 
          tabBarIcon: ({ color }) => <TabBarIcon name='code' color={color} />,
        }}
      />
    </Tabs>
  );
}
