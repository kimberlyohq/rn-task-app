import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {InputBar} from '../components/InputBar';
import {TaskList} from '../components/TaskList';

export const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <InputBar />
      <TaskList />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
});
