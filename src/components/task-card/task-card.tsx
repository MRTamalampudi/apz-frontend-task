import React, {FC, useEffect} from 'react';
import styles from './task-card.module.scss';
import {Avatar, Badge, Highlight, Tooltip} from "@mantine/core";
import {useDispatch, useSelector} from "react-redux";
import {edit, index} from "../../redux/slice/tasks";
import {RootState} from "../../redux/store";
import {Task} from "../../model/task.model";
import {add} from "../../redux/slice/dragged-item";
import {useSearchParams} from "react-router-dom";
import {TaskPriority} from "../../enum/task-priority";
import {high, highest, low, lowest, medium} from "../../assets/icons";

interface TaskCardProps {
    task:Task;
}

const TaskCard = ({task}:TaskCardProps) => {

    const dispatch = useDispatch();
    const [searchParams] = useSearchParams();
    function handleDragStart(event: React.DragEvent<HTMLDivElement>, item:Task) {
        dispatch(add(item));
    }

    const dragOver = useSelector((state:RootState)=> state.dragOver);
    function handleDrangEnd(e: React.DragEvent<HTMLDivElement>, task: Task) {
        dispatch(edit({task,taskStatus:dragOver.status}))
    }

    type PriorityDetails = {
        img: string;
        color: string;
    };

    const priorityDetailsMap: Record<TaskPriority, PriorityDetails> = {
        [TaskPriority.URGENT]: { img: highest , color:"red" },
        [TaskPriority.HIGH]: { img: high, color:"orange"},
        [TaskPriority.MEDIUM]: { img: medium, color:"yellow" },
        [TaskPriority.LOW]: { img: low, color:"blue" },
        [TaskPriority.VERYLOW]: { img:lowest,color:"blue"},
    };

    return (
      <div
          draggable={true}
          onDragStart={(e)=>handleDragStart(e,task)}
          onDragEnd={(e)=> handleDrangEnd(e,task)}
          className={styles.TaskCard}>
          <div className={styles.body}>
              <div className={styles.titleDescription}>
                  <div className={styles.title}>
                      <Highlight highlight={searchParams.get("q") || ""}>
                          {task.name}
                      </Highlight>
                  </div>
              </div>
              <div className={styles.badges}>
                  <Badge
                      size={"sm"}
                      color={priorityDetailsMap[task.priority].color}
                      radius={"sm"}
                      variant={"outline"}
                      leftSection={ <img src={priorityDetailsMap[task.priority].img} style={{height:"12px",width:"10px"}}/>}
                  >
                      {task.priority}
                  </Badge>
                  <Badge
                      size={"sm"}
                      color={"gray"}
                      radius={"sm"}
                      variant={"outline"}
                  >
                      {task.type}
                  </Badge>
              </div>
          </div>
          <div className={styles.header}>
              <div className={styles.left}>
                  <span className={styles.id}>
                  {`APZ${task.id}`}
              </span>
                  <Badge variant={"outline"} size={"sm"}>{task.effortSpent}</Badge>
              </div>
              <Tooltip position={"bottom"} label={task.assignee || "Not assigned"}>
                  <Avatar size={"sm"}>{task.assignee.substring(0,1).toUpperCase()}</Avatar>
              </Tooltip>
          </div>
      </div>
  )
}

export default TaskCard;
