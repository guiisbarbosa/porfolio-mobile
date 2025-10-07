import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export const Contact = () => {
    return (
      <View style={styles.container}>
        <Text>Contato</Text>
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