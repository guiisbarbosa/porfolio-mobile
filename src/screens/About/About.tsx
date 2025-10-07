import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export const About = () => {
  return (
    <View style={styles.container}>
      <Text>About</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#191121",
    alignItems: "center",
    justifyContent: "center",
  },
});