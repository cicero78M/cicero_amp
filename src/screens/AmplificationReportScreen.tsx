import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AmplificationReportScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Amplification Report</Text>
      <Text>Reports will be displayed here.</Text>
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
