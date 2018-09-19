import { Button, Card, Divider, TextField } from '@material-ui/core'
import moment from 'moment'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Moment from 'react-moment'
import './task.css'

export default class Task extends Component {

  state = {
    note: ''
  }

  componentDidMount () {
    this.interval = setInterval(() => this.setState({ time: Date.now() }), 1000)
  }

  componentWillUnmount () {
    clearInterval(this.interval)
  }

  handleAdd = () => {
    this.props.onNoteAdd(this.state.note)
    this.setState({
      note: ''
    })
  }

  handleChange = val => {
    this.setState({
      note: val.target.value
    })
  }

  render () {
    const { task, onComplete, onStart } = this.props
    let time
    if (task.start) {
      time = moment(task.start).startOf('day')
        .millisecond(moment(task.isFinished ? task.finish : Date.now()).diff(task.start))
    }

    return (
      <Card className={ 'task' }>
        <div className={ 'container' }>
          <h2 className={ 'title' }>
            { task.name }
          </h2>
        </div>
        <Divider/>
        <div className={ 'notes' }>
          { task.notes.map((note, index) => (
            <p className={ 'note' } key={ `note-key-${index}` }>{ note }</p>
          )) }
          { !task.isFinished && (
            <div className={ 'new-note-container' }>
              <TextField
                id="standard-note"
                label="Note"
                value={ this.state.note }
                onChange={ this.handleChange }
                margin="normal"
                className={ 'input' }
              />
              <Button
                disabled={ this.state.note.length === 0 }
                size="small"
                className={ 'button' }
                onClick={ this.handleAdd }>Add</Button>
            </div>
          ) }
        </div>
        {
          task.start && (
            <div>
              <Divider/>
              <div className={ 'time-container' }>
                <Moment className={ task.isFinished ? 'time__off' : 'time__on' } format="HH:mm:ss" interval={ 1000 }>
                  { time }
                </Moment>
              </div>
            </div>
          )
        }
        <Divider/>
        <div className={ 'action-container' }>
          { !task.isFinished && (
            <Button color={ 'secondary' } size="small" onClick={ onComplete }>Finish</Button>
          ) }
          { !task.start && (
            <Button color={ 'primary' } size="small" onClick={ onStart }>Start</Button>
          ) }
          { task.isFinished && (
            <Button disabled={ true } size="small">Completed</Button>
          ) }
        </div>
      </Card>
    )
  }
}

Task.propTypes = {
  task: PropTypes.object.isRequired,
  onComplete: PropTypes.func.isRequired,
  onStart: PropTypes.func.isRequired,
  onNoteAdd: PropTypes.func.isRequired
}
