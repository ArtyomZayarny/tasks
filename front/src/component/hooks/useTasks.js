import { useState } from 'react'
import { apiClient } from '../../apiClient'

export function useTasks(props) {
    // eslint-disable-next-line
    const [loading, setLoading] = useState(false);

    const createTask = async (newTask) => {
        setLoading(true)
        const task = await apiClient.post('/tasks', newTask)
            .then(res => {
                setLoading(false)
                return res.data
            })
        return task
    }

    const getTasks = async () => {
        setLoading(true)
        const tasks = await apiClient.get('/tasks')
            .then(res => {
                setLoading(false)
                return res.data
            })
        return tasks
    }
    return { createTask, loading, getTasks }
}
