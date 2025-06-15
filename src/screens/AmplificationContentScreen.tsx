import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AmplificationContentScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Amplification Content</Text>
      <Text>This is where content amplification actions will take place.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
});
