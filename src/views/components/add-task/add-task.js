import React, {Component} from 'react'

export default class AddTask extends Component{

  constructor (props) {
    super(props)
    this.state = {
      name: '',
    }
  }

  render () {
    return (
      <div>Add task</div>
    )
  }
}
