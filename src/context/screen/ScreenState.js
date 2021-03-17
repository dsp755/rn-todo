import React, { useReducer } from "react";
import { SET_ID } from '../types.js'
import { screenReducer } from './screenReducer'

export const ScreenContext = React.createContext()

export const ScreenState = ({children}) => {

  const [state, dispatch] = useReducer(screenReducer, null)

  const setId = todoId => dispatch({type: SET_ID, todoId})

  return(
    <ScreenContext.Provider 
      value={{
        setId,
        todoId: state
      }}
    >
      {children}
    </ScreenContext.Provider>
  )
}