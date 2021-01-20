import { useEffect, useState } from 'react';

import { useTasks } from '../hooks/useTasks';
import TaskList from '../TaskList/TaskList';

export default function TasksProvider(props) {
    const [tasksList, setTasksList] = useState([])
    const { getTasks, createTask, loading, deleteTask } = useTasks()

    const fetchTasks = async () => {
        const tasks = await getTasks();
        setTasksList(tasks)
    }

    const addTask = async (task) => {
        const newTask = await createTask(task)
        setTasksList([...tasksList, newTask])
    }

    const handleDelete = async (id) => {
        const process = await deleteTask(id);

        if (!process) {
            setTasksList(tasksList.filter(task => task.id !== id))
        } else {
            console.log('Delete was rejected')
        }

    }

    useEffect(() => {
        fetchTasks()
    }, [])


    return props.children(tasksList, addTask, loading, handleDelete)
}

