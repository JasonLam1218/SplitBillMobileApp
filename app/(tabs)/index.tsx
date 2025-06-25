import { StyleSheet } from 'react-native';

// You might want to install a calendar library like 'react-native-calendars'
import { Calendar } from 'react-native-calendars';
import { Text, View } from '@/components/Themed';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      {/* Top half: Calendar Section */}
      <View style={styles.calendarContainer}>
        <Text style={styles.sectionTitle}>Calendar</Text>
        {/* Placeholder for the Calendar component */}
        <Calendar
          // You can customize the Calendar component with props here
          // For example:
          // onDayPress={(day) => { console.log('selected day', day) }}
          // markedDates={{ '2024-06-25': { selected: true, marked: true, selectedColor: 'blue' } }}
          theme={{
            backgroundColor: '#22ffae', // This would set the background of the calendar's *entire wrapper*, often not what you want
            calendarBackground: '#ff2222', // This specifically targets the calendar grid background to red
            dayTextColor: '#000', // Example: make day numbers black
            monthTextColor: '#000', // Example: make month text black 
            arrowColor: '#000', // Example: make navigation arrows black
            todayTextColor: 'red',
            textDisabledColor: '#d9e1e8',
            dotColor: '#00adf5',
            selectedDotColor: '#ffffff',
            textMonthFontWeight: 'bold',
            textDayHeaderFontWeight: 'bold',
          }}
        />
      </View>

      {/* Bottom half: Notes Section */}
      <View style={styles.notesContainer}>
        <Text style={styles.sectionTitle}>Notes</Text>
        <Text style={styles.noteText}>Add your notes here!</Text>
        {/* You would typically have a list of notes or an input field here */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
  calendarContainer: {
    flex: 1, // Takes up the first half of the screen
    backgroundColor: '#22ffae',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  notesContainer: {
    flex: 1, // Takes up the second half of the screen
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  noteText: {
    fontSize: 16,
    color: '#555',
  },
});
