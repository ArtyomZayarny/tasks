import { useState } from 'react'
import { apiClient } from '../../apiClient'

export function useTasks(props) {
    // eslint-disable-next-line
    const [task, setTask] = useState({});

    const createTask = (task) => {
        apiClient.post('/tasks', task)
            .then(res => console.log(res.data))
    }
    return { createTask }
}
