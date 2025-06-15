import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

export default function ProfileScreen() {
  const username = useSelector((state: RootState) => state.auth.username);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <Text>Username: {username}</Text>
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
