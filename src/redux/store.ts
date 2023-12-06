import {configureStore} from "@reduxjs/toolkit";
import taskReducer from "./slice/tasks";
import draggedItemReducer from "./slice/dragged-item"
import dragOverReducer from "./slice/drag-over"
import assigneesReducer from "./slice/assignees"
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {Task} from "../model/task.model";
import {TaskStatus} from "../enum/task-status";

export const store = configureStore({
    reducer:{
        tasks:taskReducer,
        draggedItem: draggedItemReducer,
        dragOver: dragOverReducer,
        assignees: assigneesReducer
    }
})

export type RootState = {
    tasks : Task[],
    draggedItem: Task,
    dragOver: {status:TaskStatus}
    assignees: string[]
}

export default store;
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector