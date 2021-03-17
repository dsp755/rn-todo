import React, { useState, useContext } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { THEME } from "../styles/theme";
import { ModalWindow } from '../components/ModalWindow';
import { AppButton } from '../components/ui/AppButton'
import { TodoContext } from "../context/todo/TodoState";
import { ScreenContext } from "../context/screen/ScreenState";


export const TodoScreen = () => {

  const { todos, updateTodo, removeTodo } = useContext(TodoContext)
  const { id, setId } = useContext(ScreenContext)

  const [modalVisible, setModalVisible] = useState(false);

  let selectedTodo = todos.find(todo => todo.id == id)

  const saveHandler = title => {
    setModalVisible(!modalVisible)
    updateTodo(id, title)
  }

  return (
    <View style={styles.container}>
      <View style={styles.todo}>
        <Text style={styles.todoText}>{selectedTodo.title}</Text>
      </View>
      <View style={styles.buttons}>
        <AppButton onPress={() => setId(null)}>Back</AppButton>
        <AppButton onPress={() => setModalVisible(!modalVisible)}>Edit</AppButton>
        <AppButton color={THEME.RED_COLOR_TRANSPARENT_LOW} onPress={() => removeTodo(selectedTodo.id)}>Remove</AppButton>
      </View>
      <ModalWindow modalVisible={modalVisible} setModalVisible={setModalVisible} todo={selectedTodo} saveHandler={saveHandler} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignItems: 'center',
  },
  todo: {
    height: '45%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 80,
  },
  todoText: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white'
  },
  buttons: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold'
  }
})

