import React from 'react'
import Task from './Task/Task'
import Form from '../Form';
import { Spin } from 'antd';

export default function TaskList({ addTask, loading, handleDelete, ...props }) {

    return (
        <>
            <ul>
                {props.tasks.length > 0 && props.tasks.map(task => <Task key={task.id} handleDelete={handleDelete} task={task} />)}
            </ul>
            {loading && <Spin style={{ display: 'block', marginBottom: 20 }} />}
            <Form className="column" addTask={addTask} />
        </>
    )
}

