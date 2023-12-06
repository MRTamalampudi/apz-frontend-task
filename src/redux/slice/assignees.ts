import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState:string[] = []

export const assigneesSlice = createSlice({
    name:"assignees",
    initialState,
    reducers:{
        add(state,action:PayloadAction<string[]>){
            return [...action.payload]
        }
    }
})

export const {add} = assigneesSlice.actions;
export default assigneesSlice.reducer;