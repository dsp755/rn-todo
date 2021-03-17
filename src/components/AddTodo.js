import React, { useState, useContext } from 'react';
import { View, TextInput, StyleSheet, Alert, Keyboard } from 'react-native'
import { THEME } from '../styles/theme'
import { AntDesign } from '@expo/vector-icons';
import { TodoContext } from '../context/todo/TodoState'

export const AddTodo = () => {
  
  const { addTodo, todos } = useContext(TodoContext)
  
  const [value, setValue] = useState('')
  
  // value.trim() checks if value isn't empty. If empty, don't submit.
  const pressHandler = () => {
    if (value.trim()) {
      addTodo(value)
      setValue('')  
      Keyboard.dismiss()
    } else {
      Alert.alert('Please type some text')
    }
  }

  return (
    <View style={styles.block}>
      <TextInput 
      style={THEME.INPUT} 
      onChangeText={text => setValue(text)}
      value={value}
      keyboardAppearance='dark'
      placeholder='Type a todo'
      color='white'
      placeholderTextColor={'#fff'}
      autoCorrect={false}
      autoCapitalize='none'
      />
      <AntDesign style={{marginLeft: 26}} name="pluscircleo" size={24} color="white" onPress={pressHandler} />
    </View>
  )
}

const styles = StyleSheet.create({
  block: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
    marginLeft: 6
  },
})