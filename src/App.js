import React, { Component } from 'react'
import { Provider } from 'react-redux'
import './App.css'
import logo from './logo.svg'
import store from './store/store'

class App extends Component {
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <img src={ logo } className="App-logo" alt="logo"/>
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Provider store={ store }>

        </Provider>
      </div>
    )
  }
}

export default App
