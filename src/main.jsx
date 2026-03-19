import { createRoot } from 'react-dom/client'
import './assets/css/index.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomeTemplate from './Templates/HomeTemplate'
import Home from './pages/Home'
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='' element={<HomeTemplate/>}>
          <Route index element={<Home/>}></Route>
          
      
      </Route>
    </Routes>
  </BrowserRouter>
)
