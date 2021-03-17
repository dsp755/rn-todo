import React, { useState, useContext } from "react";
import { StyleSheet, View, FlatList, Text, Platform} from "react-native";
import { AddTodo } from '../components/AddTodo';
import { Todo } from '../components/Todo';
import { CalendarWindow } from '../components/CalendarWindow';
import { Entypo } from '@expo/vector-icons';
import { TodoContext } from '../context/todo/TodoState'


export const MainScreen = () => {
  const { todos, removeTodo } = useContext(TodoContext)
  const [calendarVisible, setCalendarVisible] = useState(false)

  return (
    <View style={styles.container}>
      <AddTodo />
        <FlatList
          style={{ height: 390 }}
          keyExtractor={item => item.id}
          data={todos}
          renderItem={({ item }) => <Todo id={item.id} todo={item} removeTodo={removeTodo} />}
        />
      <View>
        <CalendarWindow 
          calendarVisible={calendarVisible} 
          setCalendarVisible={setCalendarVisible} 
        />
      </View>
      <View style={styles.calendarWrapper}>
        <Text 
          style={styles.calendarButton} 
          onPress={() => setCalendarVisible(!calendarVisible)} 
        > 
          calendar
        </Text>
        <Entypo 
          style={styles.calendarIcon} 
          name="calendar" 
          size={24} 
          color="white" 
          onPress={() => setCalendarVisible(!calendarVisible)} 
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '90%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  calendarWrapper: {
    flexDirection: 'row', 
    height: 50, 
    alignItems: 'center'
  },
  calendarButton: {
    fontSize: 32, 
    fontWeight: 'bold', 
    color: 'white'
  },
  calendarIcon: {
    marginLeft: 8,
    paddingTop: Platform.OS === 'android' ?  5 : 3,
  }
});
