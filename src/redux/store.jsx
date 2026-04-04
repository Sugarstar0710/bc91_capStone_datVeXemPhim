import {configureStore} from '@reduxjs/toolkit'
import ProductPageReducer from './reducer/ProductPageReducer'
import BTGioHangReducer from './reducer/BTGioHangReducer'
import DrawerContainerReducer from './reducer/DrawerContainerReducer'
import SearchReducer from './reducer/SearchReducer'
import UserLoginReducer from './reducer/UserLoginReducer'
export const store = configureStore({
    reducer:{
        ProductPageReducer,
        BTGioHangReducer,
        DrawerContainerReducer,
        SearchReducer,
        UserLoginReducer, 
        
    }
})