import React, { Component } from 'react'
import { Provider } from 'react-redux'
import './App.css'
import logo from './logo.svg'
import store from './store/store'
import TaskPage from './views/pages/task-page/task-page'

class App extends Component {
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <img src={ logo } className="App-logo" alt="logo"/>
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Provider store={ store }>
          <TaskPage/>
        </Provider>
      </div>
    )
  }
}

export default App
