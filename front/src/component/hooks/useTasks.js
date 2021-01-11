import { useState } from 'react'
import { apiClient } from '../../apiClient'

export function useTasks(props) {
    // eslint-disable-next-line
    const [tasks, setTasks] = useState({});
    const [loading, setLoading] = useState(false);

    const createTask = (task) => {
        setLoading(true)
        apiClient.post('/tasks', task)
            .then(res => {
                setLoading(false)
                console.log(res.data)
                getTasks();
            })
    }

    const getTasks = () => {
        setLoading(true)
        apiClient.get('/tasks')
            .then(res => {
                setLoading(false)
                setTasks(res.data)
                console.log(res.data)
            })
    }
    return { createTask, loading, getTasks, tasks }
}
