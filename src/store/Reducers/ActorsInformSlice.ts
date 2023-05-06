import {PayloadAction, createSlice} from "@reduxjs/toolkit"
import { IActorsInform } from "../Interface"


interface IInform {
    users: Partial<IActorsInform>,
     loading: boolean,
     error: string
}
const initialState : IInform = {
    users: {},
    loading: false,
    error: ""
    
}

const getInform = createSlice({
    name: "inform",
    initialState,
    reducers: {
        getInformLoading(state, action) {
             state.loading = false
        },
        getInformSuccess(state, action: PayloadAction<IActorsInform>) {
           state.users = action.payload
           console.log(action);
        },
        getInformError(state, action) {
            state.error = ""
        }
    }

})
export const {getInformLoading, getInformSuccess, getInformError} = getInform.actions
export default getInform.reducer