import React, { useReducer, useContext } from "react";
import { Alert } from 'react-native'
import { ADD_TODO, REMOVE_TODO, UPDATE_TODO } from "../types";
import { todoReducer } from "./todoReducer";
import { ScreenContext } from '../screen/ScreenState'

export const TodoContext = React.createContext()

export const TodoState = ({ children }) => {

  const initialState = {
    todos: [],
    loading: false
  };
  
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const { setId } = useContext(ScreenContext)

  const addTodo = title => {
    if (!state.todos.find(todo => todo.title == title)) {
      dispatch({type: ADD_TODO, title: title})
    } else {
      Alert.alert('Todo already exists')
    }
  }

  const removeTodo = id => {
    const todo = state.todos.find(todo => todo.id === id).title
    
    Alert.alert(`Remove Todo`, `Are you sure you want to remove todo "${todo}"?`, [
      { text: "Cancel" },
      { text: "OK", onPress: () => {
        setId(null)
        dispatch({type: REMOVE_TODO, id: id})
        },
        style: 'destructive',
    }
      ],
      { cancelable: true });
  }

  const updateTodo = (id, title) => dispatch({type: UPDATE_TODO, id, title})
  
  return (
    <TodoContext.Provider
      value={{
        todos: state.todos,
        addTodo, 
        removeTodo, 
        updateTodo
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};



