import React from 'react';
import styles from './task-board.module.scss';
import { Task } from '../../model/task.model';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { TaskStatus } from '../../enum/task-status';
import { add } from '../../redux/slice/drag-over';
import TaskCard from '../../components/task-card/task-card';
import {Badge} from "@mantine/core";

interface TaskStatusBoardProps {
    status: keyof typeof TaskStatus;
    tasks: Task[];
}

const TaskStatusBoard: React.FC<TaskStatusBoardProps> = ({ status, tasks }) => {
    const dispatch = useDispatch();
    const draggedItem: Task = useSelector((state: RootState) => state.draggedItem);

    function handleDragOver(e: React.DragEvent<HTMLDivElement>) {
        e.preventDefault();
        if (draggedItem) {
            // @ts-ignore
            dispatch(add(status));
        }
    }

    return (
        <div className={styles.boards} onDragOver={handleDragOver}>
            <div className={styles.header}>
                <span className={styles.title}>
                    {status.toUpperCase()}
                </span>
                <Badge color={"gray"} radius={"xl"} size={"xs"}>
                    {tasks.length}
                </Badge>
            </div>
            <div className={styles.body}>
                {tasks.map(task => (
                    <TaskCard key={task.id} task={task} />
                ))}
            </div>
        </div>
    );
};

export default TaskStatusBoard;
