import {PayloadAction, createSlice} from "@reduxjs/toolkit"
import { ISearch } from "../Interface"

interface ISearchSlice {
    search: ISearch[],
    loader: boolean,
    error: string,
}
const initialState: ISearchSlice = {
    search: [],
    loader: false,
    error: ""
}

export const SearchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
       SearchLoader(state) {
          state.loader = true
       },
       SearchSuccess(state,action: PayloadAction<ISearch[]>) {
        state.loader = false
        state.error = ''
        state.search = action.payload
       },
       SearchError(state, action) {
         state.error = action.payload
         state.loader = false
         state.search = []
       }
    }
})

export const {SearchLoader, SearchSuccess, SearchError} = SearchSlice.actions 
export default SearchSlice.reducer