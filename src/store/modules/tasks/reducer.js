import { CREATE_TASK, UPDATE_TASK } from './types'

const initialState = {
  list: []
}

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case CREATE_TASK:
      return {
        ...state,
        list: [ ...state.list, action.task ]
      }
    case UPDATE_TASK:
      return {
        ...state,
        list: state.list.map(task => {
          if (task.id === action.task.id) {
            return {
              ...action.task
            }
          }
          return task
        })
      }
  }
  return state
}
