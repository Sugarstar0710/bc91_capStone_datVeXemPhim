import { createRoot } from 'react-dom/client'
import './assets/css/index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomeTemplate from './Templates/HomeTemplate'
import Home from './pages/Home'
import Products from './pages/Products'
import GioHang from './pages/GioHang'
import Detail from './pages/Detail'
import { Provider } from 'react-redux'
import { store } from './redux/store'
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route path='/' element={<HomeTemplate />}>
          <Route index element={<Home />}></Route>
          <Route path='products' element={<Products />}></Route>
          <Route path='cart' element={<GioHang />}></Route>
          <Route path='detail' element={<Detail />}></Route>

        </Route>
      </Routes>
    </Provider>
  </BrowserRouter>
)
