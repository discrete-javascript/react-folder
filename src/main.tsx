import React from 'react'
import ReactDOM from 'react-dom/client'
import FileExplorer from './App.tsx'
import Files from './Files.ts'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <FileExplorer files={Files} />
  </React.StrictMode>,
)
