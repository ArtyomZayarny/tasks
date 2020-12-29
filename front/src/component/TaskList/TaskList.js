import React from 'react'
import Task from './Task/Task'


export default function TaskList(props) {

    return (
        <ul>
            {props.tasks.length > 0 && props.tasks.map(task => <Task task={task} />)}
        </ul>
    )
}

