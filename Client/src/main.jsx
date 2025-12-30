import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Daily_que_Context from './Context/daily_que_Context.jsx'
import App from './App.jsx'
createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Daily_que_Context>
            <App />
        </Daily_que_Context>
    </StrictMode>
)
