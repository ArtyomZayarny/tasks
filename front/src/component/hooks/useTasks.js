import { useState, useEffect } from 'react'
import { apiClient } from '../../apiClient'

export function useTasks(props) {

    const [task, setTask] = useState({});

    const createTask = (task) => {
        apiClient.post('/tasks', task)
            .then(res => console.log(res.data))
    }
    return { createTask }
}
