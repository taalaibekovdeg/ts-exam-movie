import  ActorMoviesSlice  from './Reducers/ActorMoviesSlice';
import  getTrailer  from './Reducers/TrailerSlice';
import  getActors  from './Reducers/ActorsSlice';
import  getInform  from './Reducers/ActorsInformSlice';
import  DetailSlice  from './Reducers/DetailSlice';
import  TopRatedSlice  from './Reducers/CreateRated';
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import PopularSlice from "./Reducers/CreateSlice"
import SearchSlice from './Reducers/SearchSlice';

const rootState = combineReducers({
    TopRatedSlice, 
    PopularSlice,
    DetailSlice,
    getActors,
    getInform,
    getTrailer,
    ActorMoviesSlice,
    SearchSlice,
})

export const setUpStore = () => {
    return configureStore({
        reducer: rootState
    })
}

export type  rootState = ReturnType<typeof rootState> 
type AppStore = ReturnType<typeof setUpStore>
export type AppDispatch = AppStore["dispatch"]
