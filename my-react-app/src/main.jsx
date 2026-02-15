import React from 'react'
import {jsx as js} from 'react-dom/jsx-runtime'
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

const anotheruser = "Darsh"

const reactElement = React.createElement(
  'a',
  { href: 'https://google.com', target: '_blank' },
  'visit google',
  anotheruser
)

createRoot(document.getElementById('root')).render(
  js(reactElement)
)