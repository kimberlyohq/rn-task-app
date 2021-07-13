import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {ADD_TASK} from '../redux/actionTypes';

export const InputBar = () => {
  const dispatch = useDispatch();

  const [task, setTask] = useState<string>('');

  const addTask = (description: string) => {
    dispatch({type: ADD_TASK, payload: description});
    setTask('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={task}
        onChangeText={newTask => setTask(newTask)}
        onSubmitEditing={() => addTask(task)}
        placeholder="Add a new todo"
      />
      <TouchableOpacity onPress={() => addTask(task)}>
        <View style={styles.addButtonWrapper}>
          <Text style={styles.addText}>+</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-around',
  },
  input: {
    padding: 15,
    width: 300,
    backgroundColor: '#fff',
    borderRadius: 60,
    borderColor: '#c0c0c0',
    borderWidth: 1,
  },
  addButtonWrapper: {
    width: 50,
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 60,
    borderColor: '#c0c0c0',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addText: {},
});
