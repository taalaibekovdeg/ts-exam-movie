import {PayloadAction, createSlice} from "@reduxjs/toolkit";
import { IActorMovies } from "../Interface";

interface IMovie {
    movie:IActorMovies[],
    loading: boolean,
    error: string
}
const initialState: IMovie = {
    movie: [],
    loading: false,
    error: ""
}

export const ActorMoviesSlice = createSlice({
    name: "actors",
    initialState,
    reducers: {
       fetchActormovies(state, action: PayloadAction<any>) {
        state.loading = true;
       },
       fetchActormoviesSuccess(state, action: PayloadAction<IActorMovies[]>) {
        state.movie = action.payload
        // console.log(action)
       },
       fetchActormoviesError(state, action: PayloadAction<string>) {
        state.error = "error"
       }
    }
})

export const {fetchActormovies, fetchActormoviesSuccess, fetchActormoviesError} = ActorMoviesSlice.actions
export default ActorMoviesSlice.reducer