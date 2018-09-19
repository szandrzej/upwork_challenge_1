import React, { Component } from 'react'
import { Provider } from 'react-redux'
import './App.css'
import store from './store/store'
import TaskPage from './views/pages/task-page/task-page'
import { AppBar, Toolbar, Typography} from '@material-ui/core'

class App extends Component {
  render () {
    return (
      <div className="App">
        <AppBar position="static">
          <Toolbar>
            <Typography variant="title" color="inherit">
              Task Manager
            </Typography>
          </Toolbar>
        </AppBar>
        <Provider store={ store }>
          <TaskPage/>
        </Provider>
      </div>
    )
  }
}

export default App
