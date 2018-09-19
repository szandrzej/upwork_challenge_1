import React, { Component } from 'react'
import { connect } from 'react-redux'

class TaskPage extends Component {

  render () {
    const { tasks } = this.props

    return (
      <div>123</div>
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
