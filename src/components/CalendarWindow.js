import React from 'react'
import { StyleSheet, Modal, View, TouchableOpacity, Text } from 'react-native'
import {Calendar} from 'react-native-calendars';

export const CalendarWindow = ({ calendarVisible, setCalendarVisible }) => {

  return (
      <Modal
        transparent={true}
        animationType="slide"
        visible={calendarVisible}
        onRequestClose={() => {
          setCalendarVisible(!calendarVisible);
        }}
      >
        <TouchableOpacity 
          activeOpacity={1} 
          style={styles.centeredView} 
          onPress={() => {setCalendarVisible(!calendarVisible)}}
        >
        </TouchableOpacity>
        <View style={styles.calendarWrapper}>
          <Calendar style={{width: 400}} />
        </View>
      </Modal>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    width: '100%',
    justifyContent: "flex-end",
    alignItems: "center",
  },
  calendarWrapper: {
    justifyContent: "flex-start",
    alignItems: "center",
    width: '100%', 
    height: 360, 
    backgroundColor: 'white', 
    paddingTop: 20, 
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16
  }
})