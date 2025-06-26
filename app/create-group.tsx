import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation } from 'expo-router';

export default function CreateGroupScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create New Group</Text>
      <Text>This is the screen where you can create a new group.</Text>
      {/* You can add your form elements for group creation here */}
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F7F7F7',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
}); 