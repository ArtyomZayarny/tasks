import { useEffect } from 'react';

import { useTasks } from '../hooks/useTasks';

export default function TasksProvider(props) {
    const { getTasks, loading, tasks } = useTasks()

    useEffect(() => {
        getTasks()
    }, [])


    return props.children(tasks)
}

