import { StyleSheet, TextInput, Pressable } from 'react-native';
import React, { useState } from 'react';

// You might want to install a calendar library like 'react-native-calendars'
import { Calendar } from 'react-native-calendars';
import { Text, View } from '@/components/Themed';

export default function TabOneScreen() {
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [dailyNotes, setDailyNotes] = useState<{ [key: string]: string }>({});
  const [currentNoteInput, setCurrentNoteInput] = useState<string>('');

  const handleDayPress = (day: { dateString: string; }) => {
    setSelectedDate(day.dateString);
    setCurrentNoteInput(dailyNotes[day.dateString] || '');
  };

  const handleSaveNote = () => {
    setDailyNotes(prevNotes => ({
      ...prevNotes,
      [selectedDate]: currentNoteInput,
    }));
    console.log(`Note for ${selectedDate} saved: ${currentNoteInput}`);
  };

  return (
    <View style={styles.container}>
      {/* Top half: Calendar Section */}
      <View style={styles.calendarContainer}>
        <Text style={styles.sectionTitle}>Calendar</Text>
        {/* Placeholder for the Calendar component */}
        <Calendar
          onDayPress={handleDayPress}
          markedDates={{
            [selectedDate]: { selected: true, selectedColor: '#000', textColor: '#000' }
          }}
          theme={{
            backgroundColor: '#fff', // Dark background for the calendar component's overall area
            calendarBackground: '#000', // Dark background for the calendar grid itself
            dayTextColor: '#FFA400', // Orange text for day numbers
            monthTextColor: '#fff', // White text for the month/year header
            arrowColor: '#fff', // White arrows for navigation
            todayTextColor: '#FFA400', // Orange text for 'Today'
            todayBackgroundColor: '#fff', // White background for 'Today'
            textDisabledColor: '#888', // Faded grey for days outside the current month
            dotColor: '#fff', // White dots (for marked dates)
            selectedDotColor: '#ffffff',
            textMonthFontWeight: 'bold',
            textDayHeaderFontWeight: 'normal',
            textSectionTitleColor: '#fff', // White text for weekday headers
          }}
        />
      </View>

      {/* Bottom half: Notes Section */}
      <View style={styles.notesContainer}>
        <Text style={styles.sectionTitle}>Notes {selectedDate ? `for ${selectedDate}` : ''}</Text>
        {
          // if (selcected date, show note container) else (default text)
          selectedDate ? (
            <View style={styles.noteContentContainer}>
              <Text style={styles.selectedDateDisplay}>Date: {selectedDate}</Text>
              <TextInput
                style={styles.noteInput}
                multiline
                placeholder="Type your note here..."
                value={currentNoteInput}
                onChangeText={setCurrentNoteInput}
              />
              <Pressable style={styles.saveButton} onPress={handleSaveNote}> {/* saved locally */}
                <Text style={styles.saveButtonText}>Save Note</Text>
              </Pressable>
            </View>
          ) : (
            <Text style={styles.noteText}>Select a day on the calendar to add a note.</Text> // only shown before selecting the date
          )
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F7F7F7', // Changed to match TabTwoScreen's background
  },
  calendarContainer: {
    flex: 1, // Takes up the first half of the screen
    backgroundColor: '#660066', // purple
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
    color: '#fff',
  },
  noteText: {
    fontSize: 16,
    color: '#555',
  },
  noteInput: {
    minHeight: 80,
    flex: 1, // maximize the size of the container
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    marginBottom: 10,
    textAlignVertical: 'top', // For Android
    color: '#000', // Ensure text is visible in light mode
  },
  saveButton: {
    backgroundColor: '#660066',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  selectedDateDisplay: {
    marginBottom: 10,
    color: '#555',
  },
  noteContentContainer: {
    flex: 1,
  },
});
