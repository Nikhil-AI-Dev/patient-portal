import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'      

const container = document.getElementById('root')
createRoot(document.getElementById('root')).render(<App />)
