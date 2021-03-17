import { SET_ID } from '../types'

const handlers = {
  [SET_ID]: (state, action) => action.id,
  DEFAULT: state => state
}

export const screenReducer = (state, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT
  return handler(state, action )
};