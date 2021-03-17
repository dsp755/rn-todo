import React, { useState, useEffect, useContext } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TouchableNativeFeedback, Platform, Dimensions } from 'react-native';
import { THEME } from '../styles/theme'
import { ScreenContext } from "../context/screen/ScreenState";

export const Todo = ({ todo, id, removeTodo }) => {

  const { setId } = useContext(ScreenContext)

  const [deviceWidth, setDeviceWidth] = useState(Dimensions.get('window').width - Dimensions.get('window').width / 5)

  useEffect(() => {
    const update = () => {
      const width = Dimensions.get('window').width - Dimensions.get('window').width / 5
      setDeviceWidth(width)
    }

    Dimensions.addEventListener('change', update)

    // return activates when user closes the component (e.g. goes to another component)
    return () => {
      Dimensions.removeEventListener('change', update)
    }
  })

  const Wrapper = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity

  return (
    <Wrapper style={{ width: '100%' }} activeOpacity={0.7} onPress={() => {setId(id); console.log(id)}} onLongPress={() => removeTodo(todo.id)}>
      <View style={{...styles.todo, width: deviceWidth}}>
          <Text style={styles.text}>{ todo.title }</Text>
      </View>
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  todo: {
    height: 50,
    marginBottom: 30,
    borderRadius: 6,
    backgroundColor: THEME.MAIN_COLOR_TRANSPARENT_HIGH,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white'
  }
});