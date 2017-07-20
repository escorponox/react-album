import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Perf from 'react-addons-perf'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

window.Perf = Perf
Perf.start()

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
)
registerServiceWorker()
