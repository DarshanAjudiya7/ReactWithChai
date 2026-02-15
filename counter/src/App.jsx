import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [cnt, setCnt] = useState(7)

  const addValue = () => {
    console.log(cnt)
    setCnt(cnt + 1)
  }

  const subValue = () => {
    console.log(cnt)
    setCnt(cnt - 1) 
  }

  return (
    <>
      <h1>React Counter App</h1>
      <h2>count value: {cnt}</h2>
      <button onClick={addValue}>Add Value </button>
      <br />
      <button onClick={subValue}>Sub value </button>
    </>
  )
}

export default App
