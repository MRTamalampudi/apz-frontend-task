import React, {useLayoutEffect} from 'react';
import styles from './task-board.module.scss';
import {Task} from "../../model/task.model";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import {indexTasks} from "../../service/task.service";
import {edit, index} from "../../redux/slice/tasks";
import TaskCard from "../../components/task-card/task-card";
import {TaskStatus} from "../../enum/task-status";
import {TaskByStatus, useGetTasksByStatus} from "../../hooks/task-by-status";
import {add} from "../../redux/slice/drag-over";
import TaskStatusBoard from "./task-status-board";

interface TaskBoardProps {}

function useIndexTasks() {
    const dispatch = useDispatch()

    useLayoutEffect(() => {
        indexTasks().then(data => dispatch(index(data)));
    }, [])
}

const TaskBoard = () => {
    useIndexTasks();
    const tasksByStatus: TaskByStatus = useGetTasksByStatus();

    console.log(tasksByStatus);

    const draggedItem:Task = useSelector((state:RootState)=>state.draggedItem)
    const dispatch = useDispatch();

    function handleDragOver(e: React.DragEvent<HTMLDivElement>,status:TaskStatus) {
        e.preventDefault();

        if(draggedItem){
            console.log(status)
            dispatch(add(status));
        }


    }

    type TypeStatusKey = keyof typeof TaskStatus;
    // @ts-ignore
    const keys:TypeStatusKey[] = Object.keys(tasksByStatus);


    return (
      <div className={styles.TaskBoard}>
          {
              // @ts-ignore
              keys.map((key)=><TaskStatusBoard status={key} tasks={tasksByStatus[key]} />)
          }
      </div>
  )
};

export default TaskBoard;
