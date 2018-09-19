import { Button, Card, TextField } from '@material-ui/core'
import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class AddTask extends Component {

  constructor (props) {
    super(props)
    this.state = {
      name: '',
    }
  }

  handleAdd = () => {
    this.props.onAdd(this.state.name)
    this.setState({
      name: ''
    })
  }

  handleChange = ev => {
    this.setState({
      name: ev.target.value
    })
  }

  render () {
    return (
      <Card>
        <div>
          <TextField
            id="standard-note"
            label="Task name"
            value={ this.state.name }
            onChange={ this.handleChange }
            margin="normal"
          />
        </div>
        <Button size="small" onClick={ this.handleAdd }>Add</Button>
      </Card>
    )
  }
}

AddTask.propTypes = {
  onAdd: PropTypes.func.isRequired
}
