import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    gioHang:[],
    soLuongDangXem:1
}

const BTGioHangReducer = createSlice({
  name: 'BTGioHangReducer',
  initialState,
  reducers: {
    themGioHang:(state,action)=>{
      const spGioHangClick= action.payload
      const sp= state.gioHang.find(spGH=> spGH.id === spGioHangClick.id)
      const quantityToAdd = spGioHangClick.soLuong || 1;
      if(sp){
        sp.soLuong+=quantityToAdd
      }else{
        state.gioHang.push({ ...spGioHangClick, soLuong: quantityToAdd })
      }
    }, 
    deleteGioHang:(state,action)=>{
      const id = action.payload
      state.gioHang= state.gioHang.filter(sp=> sp.id != id)
    }, 
    tangSoLuong: (state,action)=>{
      const {id, amount}= action.payload
      const spGH= state.gioHang.find(sp=>sp.id == id)
      if(spGH){
        spGH.soLuong+=amount
      }
    },
    giamSoLuong: (state,action)=>{
      const {id,amount}= action.payload
      const spGH= state.gioHang.find(sp=>sp.id == id)
      if(spGH){
        spGH.soLuong-=amount
      }
      if(spGH.soLuong <1){
        state.gioHang= state.gioHang.filter(sp=> sp.id != id)
      }
    }, 
  }
});

export const {themGioHang, deleteGioHang, tangSoLuong, giamSoLuong,} = BTGioHangReducer.actions

export default BTGioHangReducer.reducer