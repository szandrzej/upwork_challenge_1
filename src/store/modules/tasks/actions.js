import { UPDATE_TASK, CREATE_TASK } from './types'
import uuid from 'uuid/v4'

export function addTask (name) {
  return {
    type: CREATE_TASK,
    task: {
      id: uuid(),
      name,
      isFinished: false,
      notes: [],
      finish: null,
      start: null
    }
  }
}

export function stopTask (task) {
  task = {
    ...task,
    start: task.start || Date.now(),
    isFinished: true,
    finish: Date.now()
  }

  return updateTask(task)
}

export function addNote (task, note) {
  task = {
    ...task,
    notes: [ ...task.notes, note ]
  }
  return updateTask(task)
}

export function startTask (task) {
  task = {
    ...task,
    start: Date.now()
  }
  return updateTask(task)
}

export function updateTask (task) {
  return {
    type: UPDATE_TASK,
    task
  }
}
