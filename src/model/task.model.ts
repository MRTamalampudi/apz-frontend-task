import {TaskType} from "enum/task-type";
import {TaskPriority} from "enum/task-priority";
import {TaskStatus} from "../enum/task-status";

export class Task {
    id:number;
    name:string;
    summary:string;
    assignee:string;
    startDate:string;
    endDate:string;
    type: TaskType;
    priority: TaskPriority;
    status: TaskStatus;
    effortSpent:number;
}