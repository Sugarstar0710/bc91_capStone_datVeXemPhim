import {configureStore} from '@reduxjs/toolkit'
import ProductPageReducer from './reducer/ProductPageReducer'

export const store = configureStore({
    reducer:{
        ProductPageReducer,
    }
})