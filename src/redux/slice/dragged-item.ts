import {Task} from "../../model/task.model";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState:Task = new Task();

const draggedItemSlice = createSlice({
    name: "draggedItem",
    initialState,
    reducers:{
        add(state,action:PayloadAction<Task>){
            return action.payload;
        },
        remove(state){
            return new Task();
        }
    }
})

export const {
    add,
    remove
} = draggedItemSlice.actions
export default draggedItemSlice.reducer;