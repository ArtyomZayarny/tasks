import React from 'react'
import Task from './Task/Task'
import Form from '../Form';
import { Spin } from 'antd';
import { sortOrder } from '../../utils'

export default function TaskList({ addTask, loading, handleDelete, handleUpdate, error, changeOrder, setCurrentTask, ...props }) {

    return (
        <>
            <ul>
                {props.tasks.length > 0 && props.tasks.sort(sortOrder).map(task =>
                    <Task
                        key={task.id}
                        handleDelete={handleDelete}
                        handleUpdate={handleUpdate}
                        changeOrder={changeOrder}
                        setCurrentTask={setCurrentTask}
                        task={task} />)}
            </ul>
            {loading && <Spin style={{ display: 'block', marginBottom: 20 }} />}
            {error && <span style={{ color: 'red', fontSize: 10, display: 'flex', justifyContent: 'center', marginBottom: 10 }}>Ops something went wrong</span>}
            <Form className="column" addTask={addTask} />
        </>
    )
}

