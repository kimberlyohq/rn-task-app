import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {TaskState} from '../store/taskReducer';
import {Task} from './Task';

export const TaskList = () => {
  const selectTodos = (state: TaskState) => state.tasks;

  const tasks = useSelector(selectTodos);

  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        renderItem={({item}) => <Task {...item} />}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});
