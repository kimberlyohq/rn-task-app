import React, {useRef, useState} from 'react';
import {View, TouchableOpacity, TextInput, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import {DELETE_TASK, EDIT_TASK, TOGGLE_DONE} from '../redux/actionTypes';

export type TaskProps = {
  id: number;
  description: string;
  done: boolean;
};

export const Task = ({id, description, done}: TaskProps) => {
  const dispatch = useDispatch();

  const deleteTask = () => {
    dispatch({type: DELETE_TASK, payload: {id}});
  };

  const toggleTask = () => {
    dispatch({type: TOGGLE_DONE, payload: {id}});
  };

  const editTask = () => {
    dispatch({type: EDIT_TASK, payload: {id, description: taskDescription}});
  };

  const [taskDescription, setTaskDescription] = useState<string>(description);

  const backgroundColor = done ? 'black' : '#d3d3d3';

  const textInputRef = useRef<TextInput>(null);

  return (
    <View style={styles.container}>
      <View style={styles.leftItems}>
        <TouchableOpacity
          style={[styles.checkbox, {backgroundColor}]}
          onPress={toggleTask}
        />
        <TextInput
          ref={textInputRef}
          value={taskDescription}
          onChangeText={setTaskDescription}
        />
      </View>
      <View style={styles.rightItems}>
        <TouchableOpacity
          style={styles.editButton}
          onPress={() => {
            if (textInputRef.current) {
              textInputRef.current.blur();
            }
            editTask();
          }}
        />
        <TouchableOpacity style={styles.deleteButton} onPress={deleteTask} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  leftItems: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  rightItems: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 5,
    marginRight: 15,
  },
  itemText: {
    maxWidth: '80%',
  },
  editButton: {
    backgroundColor: '#32a852',
    borderRadius: 5,
    width: 12,
    height: 12,
    marginRight: 15,
  },
  deleteButton: {
    backgroundColor: '#a83238',
    borderRadius: 5,
    width: 12,
    height: 12,
  },
});
