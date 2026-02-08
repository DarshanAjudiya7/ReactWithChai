import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

function MyApp() {
  return (
    <div><h1>Custom React App</h1></div>
  )
}

const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit Google</a>
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyApp />
  </StrictMode>,
)
