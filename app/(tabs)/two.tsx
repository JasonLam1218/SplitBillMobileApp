import { StyleSheet, ScrollView, TextInput } from 'react-native';
import React, { useState } from 'react';

import { Text, View } from '@/components/Themed';
import FontAwesome from '@expo/vector-icons/FontAwesome'; // Import FontAwesome
import PendingBillCard from '@/components/PendingBillCard'; // Import PendingBillCard
import RecentPaymentCard from '@/components/RecentPaymentCard'; // Import RecentPaymentCard

// Defines the main functional component for the Tab Two screen.
// This component displays a title, a text input for numeric amount, and some additional info.
export default function TabTwoScreen() {
  // State variable to store the amount entered by the user.
  // 'amount' holds the current value, and 'setAmount' is the function to update it.
  const [amount, setAmount] = useState('20505.00'); // Set initial value as per image, will be user input

  // State variable to store the user's debit from others.
  // For now, it's hardcoded to 50.00 for demonstration purposes.
  // const [debitAmount, setDebitAmount] = useState(50.00);

  // Handles changes to the text input.
  // It filters out non-numeric characters to ensure only numbers (and a decimal point) are stored.
  const handleAmountChange = (text: string) => {
    // Regular expression to allow only digits (0-9) and a single decimal point.
    const numericValue = text.replace(/[^0-9.]/g, '');
    setAmount(numericValue);
  };

  return (
    <View style={styles.container}>
      <View style={styles.balanceContainer}>
        <Text style={styles.balanceLabel}>My Balance</Text>
        <View style={styles.balanceAmountRow}> {/* New View to hold amount and arrow */}
          <Text style={styles.currencySymbol}>$</Text> {/* Currency symbol */}
          <TextInput
            style={styles.balanceAmountInput}
            keyboardType="numeric"
            value={amount}
            onChangeText={handleAmountChange}
            placeholder="0.00"
            placeholderTextColor="#333"
          />
          <FontAwesome name="arrow-right" size={20} color="#888" style={styles.arrowIcon} />
        </View>
      </View>

      <Text style={styles.sectionTitle}>Pending Bills</Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.pendingBillsScrollView}>
        <PendingBillCard
          title="TODO: Bill Title 1"
          amount="TODO: Amount 1"
          users={[
            { id: '1', avatar: 'TODO: User Avatar URL 1' },
            { id: '2', avatar: 'TODO: User Avatar URL 2' },
          ]}
        />
        {/* add more group with the + button from the user */}
        <PendingBillCard
          title="TODO: Bill Title 2"
          amount="TODO: Amount 2"
          users={[
            { id: '3', avatar: 'TODO: User Avatar URL 3' },
            { id: '4', avatar: 'TODO: User Avatar URL 4' },
          ]}
        />
        {/* Add more PendingBillCard components as needed */}
      </ScrollView>

      <Text style={styles.sectionTitle}>Recent Payments</Text>

      {/* Placeholder for Recent Payments cards */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <RecentPaymentCard
          icon="TODO: Icon URL 1"
          title="TODO: Payment Title 1"
          date="TODO: Date 1"
          amount="TODO: Amount 1"
          persons={0} // TODO: Number of Persons
        />
        <RecentPaymentCard
          icon="TODO: Icon URL 2"
          title="TODO: Payment Title 2"
          date="TODO: Date 2"
          amount="TODO: Amount 2"
          persons={0} // TODO: Number of Persons
        />
      </ScrollView>
    </View>
  );
}

// Stylesheet for the component, defining the layout and appearance of elements.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start', // Align content to the top
    paddingHorizontal: 20,
    backgroundColor: '#F7F7F7', // Assuming a light gray background for the overall screen as per image
  },
  balanceContainer: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 15,
    padding: 20,
    marginTop: 20,
    width: '100%',
    backgroundColor: '#FFFFFF', // White background for the balance box
  },
  balanceLabel: {
    fontSize: 16,
    color: '#888',
    marginBottom: 5,
  },
  balanceAmountRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  balanceAmount: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
  },
  balanceAmountInput: {
    flex: 1, // Allow input to take available space
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    // Remove border, padding, and margin to blend with existing design
    padding: 0,
    margin: 0,
    textAlign: 'left', // Ensure text aligns left within the input
  },
  currencySymbol: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    marginRight: 5,
  },
  arrowIcon: {
    marginLeft: 10,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'left',
    alignSelf: 'flex-start',
    marginBottom: 10,
    marginTop: 30, // Increased top margin for sections
    color: '#333',
  },
  placeholderSection: {
    height: 100, // Reduced height for more compact placeholders
    width: '100%',
    backgroundColor: '#E0E0E0', // Light gray background for placeholders
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10, // Rounded corners for placeholders
    marginBottom: 20, // Margin between placeholder sections
  },
  pendingBillsScrollView: {
    paddingVertical: 10,
    marginLeft: -20, // Negative margin to align with screen edge if needed
  },
});
