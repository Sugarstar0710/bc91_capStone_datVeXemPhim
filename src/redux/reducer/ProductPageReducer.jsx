import { createSlice } from '@reduxjs/toolkit'
import _ from 'lodash'
import { httpClient } from '../../util/Config';
const initialState = {
    mangSanPham: [],
    productDetail: {},
}

const ProductPageReducer = createSlice({
    name: "ProductPageReducer",
    initialState,
    reducers: {
        setArrayProduct: (state, action) => {
            state.mangSanPham = action.payload
        }, setProductDetail: (state, action) => {
            state.productDetail = action.payload
        },
        sortPriceAsc:(state)=>{
            state.mangSanPham = _.orderBy(state.mangSanPham,["price"], ["asc"])
        },
        sortPriceDesc: (state) => {
            state.mangSanPham = _.orderBy(
                state.mangSanPham,
                ["price"],
                ["desc"]
            )
        }
    }
});

export const { setArrayProduct, setProductDetail, sortPriceAsc,sortPriceDesc} = ProductPageReducer.actions

export default ProductPageReducer.reducer

// ------------action thunk -----------------//
export const getProductApi = () => {
    return async (dispatch) => {
        try {
            const res = await httpClient.get('/api/Product')
            const actionPayLoad = setArrayProduct(res.data.content)
            dispatch(actionPayLoad)

        } catch (err) {
            console.log(err)
        }
    }
}

export const getProductDetailActionThunk = (id) => {
    return async (dispatch) => {
        try {
            const res = await httpClient.get(`/api/Product/getbyid?id=${id}`)
            const productDetail = setProductDetail(res.data.content)
            dispatch(productDetail)
        } catch (err) {
            console.log(err)
        }
    }
}