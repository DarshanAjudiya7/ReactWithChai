import { useState } from 'react'
import './App.css'
import Darshan from './darshan'

function App() {
  const username = "Darshan";

  return (
    <>
    <Darshan />
    <h1>Hello World {username}</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
    </>
  )
}

export default App;
