import { createRoot } from 'react-dom/client'
import './assets/css/index.css'
import { BrowserRouter, Routes, Route, unstable_HistoryRouter as HistoryBrowser   } from 'react-router-dom'
import HomeTemplate from './Templates/HomeTemplate'
import Home from './pages/Home'
import Products from './pages/Products'
import GioHang from './pages/GioHang'
import Detail from './pages/Detail'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import Register from './pages/Register'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Search from './pages/Search'
import EditGioHang from './pages/EditGioHang' 
import {createBrowserHistory} from 'history'
export const history = createBrowserHistory()


createRoot(document.getElementById('root')).render(
  <HistoryBrowser history={history}>
      <Provider store={store}>
      <Routes>
        <Route path='/' element={<HomeTemplate />}>
          <Route index element={<Home />}></Route>
          <Route path='products' element={<Products />}></Route>
          <Route path='cart' element={<GioHang />}></Route>
          <Route path='detail/:id' element={<Detail />}></Route>
          <Route path='register' element={<Register />}></Route>
          <Route path='login' element={<Login />}></Route>
          <Route path='profile' element={<Profile />}></Route>
          <Route path='search' element={<Search />}></Route>
          <Route path='editGioHang' element={<EditGioHang />}></Route>

        </Route>
      </Routes>
    </Provider>
  </HistoryBrowser>
  
    

)
