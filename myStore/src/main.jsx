import ReactDOM from 'react-dom/client'
import App from './App'
import { FiltersProvider } from './context/filters.jsx'
import './index.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
library.add(faCartArrowDown);


ReactDOM.createRoot(document.getElementById('root')).render(
  <FiltersProvider>
    <App />
  </FiltersProvider>
)
