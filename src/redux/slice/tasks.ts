import {Task} from "model/task.model";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {TaskStatus} from "../../enum/task-status";

const initialState:Task[] = [];

const taskSlice = createSlice({
    name:"tasks",
    initialState,
    reducers:{
        index(state,action:PayloadAction<Task[]>){
            return [...action.payload]
        },
        edit(state,action:PayloadAction<{ task:Task,taskStatus:TaskStatus }>){
            return state.map((value) =>
                value.id === action.payload.task.id 
                    ? { ...value, status: action.payload.taskStatus }
                    : value)
        }
    }
})

export const {index,edit} = taskSlice.actions;
export default taskSlice.reducer;