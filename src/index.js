import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { DataLayer } from './DataLayer'
import reducer, { initialState } from './reducer'
import { AuthProvider } from './AuthContext'

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <DataLayer initialState={initialState} reducer={reducer}>
        <App />
      </DataLayer>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

reportWebVitals()
