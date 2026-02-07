import { useState } from 'react'
import './App.css'
import Darshan from './darshan'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Darshan />
    <h1>Hello World</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
    </>
  )
}

export default App;
