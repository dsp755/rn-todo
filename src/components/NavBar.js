import React, { useState, useEffect } from "react";
import { View, StyleSheet, Dimensions } from "react-native";


export const NavBar = () => {

  const [navHeight, setNavHeight] = useState(Dimensions.get('window').height * 0.12)

  useEffect(() => {
    const update = () => {
      const height = Dimensions.get('window').height * 0.12
      setNavHeight(height)
    }

    Dimensions.addEventListener('change', update)

    // return activates when user closes the component (e.g. goes to another component)
    return () => {
      Dimensions.removeEventListener('change', update)
    }
  })

  return (
    <View style={{...styles.navbar, height: navHeight }}>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    alignSelf: "stretch",
    paddingBottom: 10,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
});

