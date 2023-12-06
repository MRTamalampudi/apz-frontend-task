import {TaskStatus} from "../enum/task-status";
import {Task} from "../model/task.model";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../redux/store";
import {add} from "../redux/slice/assignees";
import {useSearchParams} from "react-router-dom";
import {useDebouncedValue} from "@mantine/hooks";

export function useGetTasksByStatus():TaskByStatus {
    const dispatch = useDispatch();
    const [searchParams, setSearchParams] = useSearchParams();
    const sD = searchParams.get("startDate");
    const eD = searchParams.get("endDate");
    const as = searchParams.get("assignee");
    const pr = searchParams.get("priority");
    const q = searchParams.get("q");

    let tasks: Task[] = useSelector((state: RootState) => state.tasks);

    const distinctAssignees = [...new Set(tasks.map(task => task.assignee || "Not assigned"))];

    dispatch(add(distinctAssignees))

    tasks = tasks.filter((task) => {
        let b = false;

        if (sD && task.startDate !== sD) return false;
        if (eD && task.endDate !== eD) return false;
        if (as && task.assignee !== as) return false;
        if (pr && task.priority !== pr) return false;
        if (q && !task.name.toLowerCase().includes(q.toLowerCase())) return false;

        return true;
    });

    return Object.values(tasks).reduce((initialValue, task) => {
        const status = task.status.valueOf() == "" ? TaskStatus.UNKNOWN : task.status;
        if (initialValue[status]) {
            initialValue[status].push(task);
        } else {
            initialValue[status] = [task];
        }
        return initialValue;
    }, {
        [TaskStatus.UNKNOWN]: [] as Task[],
        [TaskStatus.IN_PROGRESS]: [] as Task[],
        [TaskStatus.READY]: [] as Task[],
        [TaskStatus.TESTING]: [] as Task[],
        [TaskStatus.DONE]: [] as Task[],
    });
}

export type TaskByStatus = { [key in TaskStatus]: Task[] };
