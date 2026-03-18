// set as entry point in HTML shell
// renders App.jsx into DOM

import App from './App'
import "./styles.css"

// attach React to root div and render components in it
// StrictMode is just for development checks
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)