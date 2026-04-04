import { createSlice } from '@reduxjs/toolkit'
import { ACCESSTOKEN, getLocalStorageString, httpClient, removeStore, saveLocalStorageString, USSERLOGIN } from '../../util/Config';
import { history } from '../../main';

let userLoginDefaut = getLocalStorageString(USSERLOGIN)
let accessTokenDefault = getLocalStorageString(ACCESSTOKEN)
const initialState = {
  userLogin: userLoginDefaut,
  accessToken: accessTokenDefault
}

const UserLoginReducer = createSlice({
  name: 'UserLoginReducer',
  initialState,
  reducers: {
    loginAction:(state,action)=>{
      state.userLogin= action.payload.userLogin
      state.accessToken= action.payload.accessToken
    }
  }
});

export const {loginAction} = UserLoginReducer.actions

export default UserLoginReducer.reducer


export const loginActionApiAsync=(userLogin)=>{
  return async(dispatch)=>{
    try{
      const res = await httpClient.post('/api/Users/signin', userLogin)
      const payload={
        userLogin: res.data?.content?.email,
        accessToken: res.data?.content?.accessToken
      }
      const action = loginAction(payload)
      dispatch(action)
      alert("Đăng nhập thành công!"); 
      history.push('/');
      saveLocalStorageString(USSERLOGIN, payload.userLogin)
      saveLocalStorageString(ACCESSTOKEN, payload.accessToken)
    }catch(err){
      if (err.response?.status !== 404) {
          alert(err.response?.data?.message || "Đăng nhập thất bại!");
      }
      removeStore(USSERLOGIN)
      removeStore(ACCESSTOKEN)
    }

  }
}

export const regiterActionApiAsync= (userRegister)=>{
  return async (dispatch)=>{
    try{
      const res= await httpClient.post('/api/Users/signup', userRegister)
      alert(res.data?.message)
      history.push('/login')
    }catch(err){
      alert (err.response?.data?.message)
    }
  }
}