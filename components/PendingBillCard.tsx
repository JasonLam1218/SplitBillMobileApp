import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

interface PendingBillCardProps {
  title: string;
  amount: string;
  users: { id: string; avatar: string }[];
}

const PendingBillCard: React.FC<PendingBillCardProps> = ({ title, amount, users }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.amount}>{amount}</Text>
      <Text style={styles.splitWith}>Split With</Text>
      <View style={styles.userAvatarsContainer}>
        {users.map(user => (
          <Image key={user.id} source={{ uri: user.avatar }} style={styles.avatar} />
        ))}
        <Pressable style={styles.addIconContainer}>
          <FontAwesome name="plus" size={20} color="#fff" />
        </Pressable>
      </View>
      <View style={styles.buttonsContainer}>
        <Pressable style={styles.splitNowButton}>
          <Text style={styles.buttonText}>Split Now</Text>
        </Pressable>
        <Pressable style={styles.clockButton}>
          <FontAwesome name="clock-o" size={20} color="#888" />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1A1A1A', // Dark background for the card
    borderRadius: 20, // rounded corners
    padding: 20, // space between content and edges
    marginLeft: 20,
    marginRight: 15, // Space between cards if there are multiple
    width: 280, // Fixed width for the card
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  amount: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 15,
  },
  splitWith: {
    fontSize: 14,
    color: '#ccc',
    marginBottom: 10,
  },
  userAvatarsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: -10, // Overlap avatars
    borderWidth: 2,
    borderColor: '#1A1A1A',
  },
  addIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#555',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20, // Space from avatars
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  splitNowButton: {
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 25,
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
  },
  clockButton: {
    backgroundColor: '#333',
    borderRadius: 10,
    padding: 12,
  },
});

export default PendingBillCard; 