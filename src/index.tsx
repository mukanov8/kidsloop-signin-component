import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import App from './App'
import { ThemeProvider } from './context/themeContext'
import { LocaleProvider } from './context/localeContext'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <LocaleProvider>
        <App />
      </LocaleProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
