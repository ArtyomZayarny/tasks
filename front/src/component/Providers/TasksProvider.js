import { useEffect, useState } from 'react';

import { useTasks } from '../hooks/useTasks';
import TaskList from '../TaskList/TaskList';

export default function TasksProvider(props) {
    const [tasksList, setTasksList] = useState([])
    const { getTasks, createTask, loading } = useTasks()

    const fetchTasks = async () => {
        const tasks = await getTasks();
        setTasksList(tasks)
    }

    const addTask = async (task) => {
        const newTask = await createTask(task)
        setTasksList([...tasksList, newTask])
    }

    useEffect(() => {
        fetchTasks()
    }, [])


    return props.children(tasksList, addTask, loading)
}

