import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    title:'abc',
    contentComponent:<div>default</div>
}

const DrawerContainerReducer = createSlice({
  name: 'DrawerContainerReducer',
  initialState,
  reducers: {
    changeContentDrawerAction: (state,action)=>{
        const {title, contentComponent}= action.payload
        state.title= title
        state.contentComponent= contentComponent
    }
  }
});

export const {changeContentDrawerAction} = DrawerContainerReducer.actions

export default DrawerContainerReducer.reducer