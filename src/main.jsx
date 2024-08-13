import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import NoteState from './Contexts/NoteState.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <NoteState>
          <App />
  </NoteState>
   
  // </StrictMode>,
)
