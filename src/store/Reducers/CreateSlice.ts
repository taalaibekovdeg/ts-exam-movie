import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IPopularState } from "../Interface";




interface IPopular {
    users: IPopularState[],
    loading: boolean,
    error: string,
    click: number,
    page: number,

}

const initialState: IPopular = {
    users: [],
    loading: false,
    error: "",
    click: 1,
    page: 1,
   
}

 export const PopularSlice = createSlice({
    name: "popular",
    initialState,
    reducers: {
        getActors(state) {
             state.loading = true
        },
        getActorsSuccess(state,  action:PayloadAction<IPopularState[]>) {
            state.loading = true
            state.users = action.payload
            state.error = ""
        },
        getActorsError(state,action: PayloadAction<IPopularState[]>){
            state.error = "error"
        },
        getClickSlice(state, action) {
           state.click =+ action.payload
        },
        getPage(state, action) {
            state.page = action.payload
        },
        getMinus(state, action) {
           state.click > 1 ? state.click -= action.payload : state.click = action.payload
           
        }
       
    },
  


})
export const {getPage ,getActors, getActorsError,getActorsSuccess, getClickSlice, getMinus} = PopularSlice.actions
export default PopularSlice.reducer