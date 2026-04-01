import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
const initialState = {
    mangSanPham:[]
}

const ProductPageReducer = createSlice({
    name: "ProductPageReducer",
    initialState,
    reducers: {
        setArrayProduct:(state,action)=>{
            state.mangSanPham=action.payload
        }
    }
});

export const { setArrayProduct } = ProductPageReducer.actions

export default ProductPageReducer.reducer

// ------------action thunk -----------------//
export const getProductApi= ()=>{
    return async(dispatch)=>{
        try{
            const res= await axios.get(`https://shop.cyberlearn.vn/api/Product`)
            const actionPayLoad= setArrayProduct(res.data.content)
            dispatch(actionPayLoad)

        }catch(err){
            console.log(err)
        }
    }
}