import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {addTask} from '../store/actionCreators';

export const InputBar = () => {
  const dispatch = useDispatch();

  const [task, setTask] = useState('');

  const onSubmit = (description: string) => {
    // Check whether the description is empty
    if (description === '') {
      Alert.alert('🚨Empty Task', 'Task cannot be empty!');
      return;
    }
    dispatch(addTask(description));
    setTask('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={task}
        placeholder="Add a new task"
        onChangeText={newTask => setTask(newTask)}
        onSubmitEditing={() => onSubmit(task)}
      />
      <TouchableOpacity onPress={() => onSubmit(task)}>
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
