import React, { Component } from 'react'
import { connect } from 'react-redux'
import AddTask from '../../components/add-task/add-task'
import Task from '../../components/task/task'

class TaskPage extends Component {

  render () {
    const { tasks } = this.props

    return (
      <React.Fragment>
        <Task
          task={ { name: '123' } }
          onComplete={ () => {} }
          onPause={ () => {} }
          onStart={ () => {} }
        />
        <AddTask/>
      </React.Fragment>
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
    addTask: task => dispatch(),
    updateTask: task => dispatch()
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskPage)
