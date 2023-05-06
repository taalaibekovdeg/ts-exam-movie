import {PayloadAction, createSlice} from "@reduxjs/toolkit"
import { IGetActors } from "../Interface"


interface IActors {
    actors: IGetActors[],
    loading: boolean,
    error: string
}

const initialState: IActors = {
    actors: [],
    loading: false,
    error: ""
}

export const getActors = createSlice({
    name: "actors",
    initialState,
    reducers: {
        fetchingActors(state, action:PayloadAction<any>){
            state.loading = true
        },
        fetchingActorsSuccess(state, action:PayloadAction<IGetActors[]>){
            state.actors = action.payload
            console.log(action)
        },
        fetchingActorsError(state, action:PayloadAction<string>){
            state.error = ""
        }
    }
})


export const {fetchingActors,fetchingActorsSuccess, fetchingActorsError} = getActors.actions
export default getActors.reducer