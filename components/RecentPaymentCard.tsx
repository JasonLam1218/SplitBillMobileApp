import React from 'react';
import { View, Text, StyleSheet, Image, Platform } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

interface RecentPaymentCardProps {
  icon: string; // Could be a local image require or a URI for an icon
  title: string;
  date: string;
  amount: string;
  persons: number;
}

const RecentPaymentCard: React.FC<RecentPaymentCardProps> = ({ icon, title, date, amount, persons }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: icon }} style={styles.icon} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
      <View style={styles.amountContainer}>
        <Text style={styles.amount}>{amount}</Text>
        <View style={styles.personsContainer}>
          <FontAwesome name="user" size={12} color="#888" />
          <Text style={styles.personsText}>{persons} Persons</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 15,
    marginBottom: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 5,
    ...Platform.select({
      web: {
        boxShadow: '0px 2px 3px rgba(0, 0, 0, 0.1)',
      },
    }),
  },
  icon: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginRight: 15,
  },
  detailsContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  date: {
    fontSize: 14,
    color: '#888',
  },
  amountContainer: {
    alignItems: 'flex-end',
  },
  amount: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  personsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  personsText: {
    fontSize: 12,
    color: '#888',
    marginLeft: 5,
  },
});

export default RecentPaymentCard; 