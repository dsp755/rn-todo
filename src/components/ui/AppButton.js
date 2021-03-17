import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { THEME } from '../../styles/theme'

export const AppButton = ({ children, color = THEME.MAIN_COLOR_TRANSPARENT_LOW, onPress }) => (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View style={{ ...styles.button, backgroundColor: color }}>
        <Text style={{color: 'white', fontWeight: 'bold'}}>{children}</Text>
      </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    width: 100,
    height: 40,
    borderRadius: 6,    
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 15,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.6,
    elevation: 8
  }
})
