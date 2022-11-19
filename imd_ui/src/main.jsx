import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Route,Routes, Link, BrowserRouter} from 'react-router-dom' 
import './index.css'
import Fields from './components/Fields' 


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
    <Route exact path="/" element={<App/>}/>
    <Route path="/fields" element={<Fields/>}/>
    </Routes>
 </BrowserRouter>
)
