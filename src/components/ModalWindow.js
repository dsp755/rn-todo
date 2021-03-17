import React, { useState, useContext } from 'react'
import { StyleSheet, Modal, View, TextInput, Alert, Text, TouchableOpacity } from 'react-native';
import { THEME } from '../styles/theme'
import { TodoContext } from "../context/todo/TodoState";
import { ScreenContext } from "../context/screen/ScreenState";

export const ModalWindow = ({ modalVisible, setModalVisible, todo, saveHandler }) => {

  const [title, setTitle] = useState(todo.title)
  let oldValue = todo.title

  return (
    <Modal   
      animationType="slide"
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.centeredView}>
        <TextInput 
        style={THEME.INPUT} 
        onChangeText={setTitle}
        value={title}
        color='white'
        keyboardAppearance='dark'
        placeholderTextColor={'#fff'}
        autoCorrect={false}
        autoCapitalize='none'
        />
        <View style={THEME.BUTTONS}>
          <TouchableOpacity style={THEME.BUTTON} onPress={() => {
            if (todo.title.length < 1) {
              Alert.alert("Please enter some text")
              return
            }
            saveHandler(title)
            }}
          >
            <Text style={styles.text}>OK</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{...THEME.BUTTON}} onPress={() => {
            setTitle(oldValue)
            setModalVisible(!modalVisible)
          }}
          >
            <Text style={styles.text}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    width: '100%',
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'black'
  },
  text: {
    color: 'white',
    fontWeight: 'bold'
  }
})