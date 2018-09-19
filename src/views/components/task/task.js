import React from 'react'
import PropTypes from 'prop-types'

export default function Task ({task, onComplete, onStart, onPause }) {
  return (
    <div>{JSON.stringify(task, null, 2) }</div>
  )
}

Task.propTypes = {
  task: PropTypes.object.isRequired,
  onComplete: PropTypes.func.isRequired,
  onStart: PropTypes.func.isRequired,
  onPause: PropTypes.func.isRequired
}
