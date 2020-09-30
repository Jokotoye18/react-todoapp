import React from 'react'
import './App.css'

import {TodoProvider} from './context/TodoContext'
import {Header} from './components/Header'
import {Todos} from './components/Todos'
import {Footer} from './components/Footer'



const App = () => {

  return (
    <TodoProvider>
      <Header />
      <main>
        <Todos />
      </main>
      <Footer />
    </TodoProvider>
  )
}

export default App
