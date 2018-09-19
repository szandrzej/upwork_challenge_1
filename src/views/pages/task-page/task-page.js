import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addNote, addTask, startTask, stopTask } from '../../../store/modules/tasks/actions'
import AddTask from '../../components/add-task/add-task'
import Task from '../../components/task/task'
import './task-page.css'

class TaskPage extends Component {

  render () {
    const { tasks } = this.props

    return (
      <div className={ 'task-container' }>
        { tasks.map(task => {
          return (
            <div key={ task.id }>
              <Task
                task={ task }
                onComplete={ () => this.props.stopTask(task) }
                onNoteAdd={ note => this.props.addNote(task, note) }
                onStart={ () => this.props.startTask(task) }
              />
            </div>
          )
        }) }
        <AddTask
          onAdd={ name => this.props.addTask(name)}
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    tasks: state.tasks.list
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTask: name => dispatch(addTask(name)),
    addNote: (task, note) => dispatch(addNote(task, note)),
    startTask: task => dispatch(startTask(task)),
    stopTask: task => dispatch(stopTask(task))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskPage)
