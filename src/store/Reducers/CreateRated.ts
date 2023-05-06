import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ITopRared } from "../Interface";


interface ITop {
    users: ITopRared[],
    loading: boolean,
    error: string,
    page: number,
    click: number
}

const initialState : ITop = {
    users: [],
    loading: false,
    error: "",
    page: 1,
    click: 1,
}


export const TopRatedSlice = createSlice({
    name: "topRated",
    initialState,
    reducers: {
       TopRatedActors(state) {
        state.loading = true;
       },
       TopRatedSuccess(state, action: PayloadAction<ITopRared[]>){
        state.loading = true
        state.users = action.payload
        state.error = ""
       },
       TopRatedError(state, action: PayloadAction<ITopRared[]>){
        state.error = "error"
       },
       getPage(state, action) {
        state.page = action.payload
    },
    getMinus(state, action) {
        state.click > 1 ? state.click -= action.payload : state.click = action.payload
        
     },
     getClickSlice(state, action) {
        state.click =+ action.payload
     }
    }
})

export const {getPage,TopRatedActors,TopRatedSuccess, TopRatedError} = TopRatedSlice.actions

export default TopRatedSlice.reducer