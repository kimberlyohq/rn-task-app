import React, {useRef, useState} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  StyleSheet,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {deleteTask, editTask, toggleDone} from '../store/actionCreators';

export type TaskProps = {
  id: number;
  description: string;
  done: boolean;
};

export const Task = ({id, description, done}: TaskProps) => {
  const [editText, setEditText] = useState('编辑');

  const dispatch = useDispatch();

  const onDelete = () => {
    dispatch(deleteTask(id));
  };

  const onToggle = () => {
    dispatch(toggleDone(id));
  };

  const onEdit = () => {
    dispatch(editTask(id, description));
  };

  const [taskDescription, setTaskDescription] = useState(description);

  const textInputRef = useRef<TextInput>(null);

  const textDecoration = done ? 'line-through' : 'none';

  const completedTask = {
    backgroundColor: done ? '#dcdcdc' : '#fff',
    opacity: done ? 0.5 : 1.0,
  };

  const onFocus = () => {
    textInputRef.current?.focus();
    setEditText('完成');
  };

  const onBlur = () => {
    textInputRef.current?.blur();
    setEditText('编辑');
  };

  const isFocused = textInputRef.current?.isFocused();

  return (
    <View style={[styles.container, completedTask]}>
      <View style={styles.leftItems}>
        <TouchableOpacity style={styles.checkbox} onPress={onToggle}>
          {done && <Text style={styles.check}>✓</Text>}
        </TouchableOpacity>
        <TextInput
          ref={textInputRef}
          style={[styles.itemText, {textDecorationLine: textDecoration}]}
          maxLength={100}
          value={taskDescription}
          onChangeText={setTaskDescription}
          onFocus={onFocus}
          onBlur={onBlur}
          onSubmitEditing={() => {
            onBlur();
            onEdit();
          }}
        />
      </View>
      <View style={styles.rightItems}>
        <TouchableOpacity
          style={styles.editButton}
          onPress={() => {
            if (isFocused) {
              onBlur();
              onEdit();
            } else {
              onFocus();
            }
          }}>
          <Text>{editText}</Text>
        </TouchableOpacity>
        {!isFocused && (
          <TouchableOpacity style={styles.deleteButton} onPress={onDelete}>
            <Text>删除</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    opacity: 0.5,
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
    right: 10,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 5,
    marginRight: 15,
    padding: 5,
    backgroundColor: '#d3d3d3',
  },
  check: {
    fontSize: 16,
    textAlign: 'center',
    justifyContent: 'center',
  },
  itemText: {
    maxWidth: '60%',
    minWidth: '60%',
  },
  editButton: {
    borderColor: '#32a852',
    borderRadius: 5,
    borderWidth: 1,
    padding: 5,
    marginRight: 15,
  },
  deleteButton: {
    borderColor: '#a83238',
    borderRadius: 5,
    borderWidth: 1,
    padding: 5,
    marginRight: 15,
  },
});
