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

    const deleteTask = async (id) => {
        setLoading(true)
        const response = await apiClient.delete(`/tasks/${id}`)
            .then(res => {
                setLoading(false)
                return res.data
            })
        return response
    }

    const updateTask = async (id, title) => {
        setLoading(true)
        const response = await apiClient.patch(`/tasks/${id}/title`, { title })
            .then(res => {
                setLoading(false)
                return res.data
            })
            .catch(() => {
                setLoading(false)
                return false
            })
        return response
    }
    return { createTask, loading, getTasks, deleteTask, updateTask }
}
