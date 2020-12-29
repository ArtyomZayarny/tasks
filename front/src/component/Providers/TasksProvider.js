import { useState, useEffect } from 'react';
import { apiClient } from '../../apiClient'

export default function TasksProvider(props) {
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        apiClient.get('/tasks')
            .then(res => setTasks(res.data))
    }, [])


    return props.children(tasks)
}

