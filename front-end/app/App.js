import React, { Component } from 'react'

import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './views/HomePage'

const Config = require('Config')

class App extends Component {
  render() {
    return(
      <div>
        <Header Config={Config}/>
        <HomePage />
        <Footer />
      </div>
    )
  }
}

export default App
