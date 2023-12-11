import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './styles/index.css'
import Provider from './context/Provider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
)
