import { IDetailPage } from './../Interface';
import {PayloadAction, createSlice} from "@reduxjs/toolkit"

interface IDetail {
    user: Partial<IDetailPage>,
    loading: boolean,
    error: string
    lang: string,
    dark: boolean
}

const initialState: IDetail = {
    user: {}, 
    loading: false,
    error: "",
    lang: "en-US",
    dark: false
}


export const DetailSlice = createSlice({
    name: "detail/getDetailSuccess",
    initialState,
    reducers: {
        getDetailFilm(state, action: PayloadAction<any>) {
            state.loading = true
            console.log(action.payload)
        },
        getDetailSuccess(state, action:PayloadAction<IDetailPage>) {
            state.loading = true
            state.user = action.payload
            state.error = ""
        },
        getDetailError(state, action:PayloadAction<IDetailPage[]>) {
             state.error = "error"
        },
        getlanguage(state, action:PayloadAction<string>) {
            state.lang = action.payload
        },

        getDark(state) {
             state.dark = !state.dark
        }
    }
})

export const {getDetailFilm, getDetailSuccess, getDetailError,getlanguage,getDark} = DetailSlice.actions

export default DetailSlice.reducer