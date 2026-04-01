import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
const initialState = {
    mangSanPham:[],
    productDetail:{}
}

const ProductPageReducer = createSlice({
    name: "ProductPageReducer",
    initialState,
    reducers: {
        setArrayProduct:(state,action)=>{
            state.mangSanPham=action.payload
        }, setProductDetail: (state,action)=>{
            state.productDetail=action.payload
        }
    }
});

export const { setArrayProduct,setProductDetail } = ProductPageReducer.actions

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

export const getProductDetailActionThunk=(id)=>{
    return async(dispatch)=>{
        try{
            const res= await axios.get(`https://apistore.cybersoft.edu.vn/api/Product/getbyid?id=${id}`)
            const productDetail= setProductDetail(res.data.content)
            dispatch(productDetail)
        }catch(err){
            console.log(err)
        }
    }
}