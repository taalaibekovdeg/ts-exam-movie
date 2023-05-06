import {PayloadAction, createSlice} from "@reduxjs/toolkit"
import { ITrailer } from "../Interface"

interface ITrailerType{
    users: ITrailer[],
    loading: boolean,
    error: string,
}

const initialState: ITrailerType = {
    users: [],
    loading: false,
    error: ""
}

export const getTrailer = createSlice({
    name: "trailer",
    initialState,
    reducers:{
        fetchTrailer(state, action:PayloadAction<any>) {
            state.loading = false
        },
        fetchTrailerSuccess(state,action) {
           state.users = action.payload
        },
        fetchTrailerError(state, action) {
            state.error = "error"
        }
    }
    
})

export const {fetchTrailer, fetchTrailerSuccess,fetchTrailerError} = getTrailer.actions

export default getTrailer.reducer