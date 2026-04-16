import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.css'
import App from './App.jsx'

// ⚡ 1. Import BrowserRouter from react-router-dom
import { BrowserRouter } from 'react-router-dom';


// before router stage this one used...
// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* ⚡ NEW: Wrap App with BrowserRouter */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)

