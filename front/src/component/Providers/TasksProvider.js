import { useEffect, useState } from 'react';

import { useTasks } from '../hooks/useTasks';
import TaskList from '../TaskList/TaskList';

export default function TasksProvider(props) {
    const [tasksList, setTasksList] = useState([])
    const [error, setError] = useState(false)
    const { getTasks, createTask, loading, deleteTask, updateTask } = useTasks()
    const [activeTask, setActiveTask] = useState(null)

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

    const handleUpdate = async (id, title) => {
        const task = await updateTask(id, title)
        if (!task) {
            setError(true)
        }
    }

    const sortTasks = (a, b) => {
        return a.order > b.order ? 1 : -1
    }

    const changeOrder = (task) => {
        console.log('task', task)
        console.log('ActiveTask', activeTask)

        const updatedList = tasksList.sort(sortTasks).map(t => {

            //change draaggble card order
            if (t.id === activeTask.id) {
                return { ...t, order: task.order }
            }

            //change dropped card order
            if (t.id === task.id) {
                return { ...t, order: activeTask.order }
            }
            return t

        })
        setTasksList(updatedList)
    }

    const setCurrentTask = (task) => {
        console.log('setCurrentTask', task)
        setActiveTask(task)
    }

    useEffect(() => {

        fetchTasks()
    }, [])


    return props.children(tasksList, addTask, loading, handleDelete, handleUpdate, error, changeOrder, setCurrentTask)
}

