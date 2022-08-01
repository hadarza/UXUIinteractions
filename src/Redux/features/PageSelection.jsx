import { createSlice } from "@reduxjs/toolkit";

const initialState={
    selectPage: ""
}

const PageSelection = createSlice({
    name:'PageSelection',
    initialState,
    reducers:{
        setPageSelection(state,action){
            state.selectPage = action.payload;
        }
    }
})

export const getPageSelection = (state) => state.PageSelection.selectPage;
export const {setPageSelection} = PageSelection.actions;
export default PageSelection.reducer
