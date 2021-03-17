import React, { useReducer } from "react";
import { SET_ID } from '../types.js'
import { screenReducer } from './screenReducer'

export const ScreenContext = React.createContext()

export const ScreenState = ({children}) => {

  const [state, dispatch] = useReducer(screenReducer, null)

  const setId = id => dispatch({type: SET_ID, id})

  return(
    <ScreenContext.Provider 
      value={{
        setId,
        id: state
      }}
    >
      {children}
    </ScreenContext.Provider>
  )
}