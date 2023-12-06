import {TaskStatus} from "../../enum/task-status";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState:{status:TaskStatus} = {status:TaskStatus.UNKNOWN}

const dragOverStatusSlice = createSlice({
    name:"dragOver",
    initialState,
    reducers:{
        add(state,action:PayloadAction<TaskStatus>){
            if(state.status != action.payload) return {status: action.payload}
        }
    }
})

export const {add} = dragOverStatusSlice.actions;
export default dragOverStatusSlice.reducer;