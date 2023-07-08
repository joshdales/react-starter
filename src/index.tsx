import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import App from './App'

import 'modern-normalize'

const element = document.getElementById('app')
if (!element) {
  throw new Error('there is no root element')
}

ReactDOM.createRoot(element).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
