import { useState } from 'react'
import './App.css'

import Header from "./components/Header";
import Footer from './components/Footer';
import User from './components/User';



function App() {

  return (
    <>
      <Header />

      <User userName="Alice" favFood="Salad" age={30} />
      <User userName="Bob" favFood="Falafel" age={40} />
      <User userName="Charly" favFood="Pizza" age={50} />

      <Footer>
          <p>Angry Cats, 2224</p>
      </Footer>
      

    </>
  )
}

export default App
