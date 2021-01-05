import React, { useState } from 'react'
import TaskList from '../TaskList/TaskList'
import TasksProvider from '../Providers/TasksProvider'
import Form from '../Form';
import Button from '../ui/buttons/button'
import styles from './Column.module.scss'

export default function Column(props) {

    const [showForm, setShowForm] = useState(false)

    return (
        <div className={styles['column']} style={{ backgroundColor: '#ebecf0' }}>
            <h2>Your tasksList</h2>
            <TasksProvider>
                {
                    (tasks) => { return <TaskList tasks={tasks} /> }
                }
            </TasksProvider>
            {showForm && <Form className="column" />}
            {!showForm && <Button className={styles['plus']} showForm={setShowForm}>Add new task</Button>}
        </div>
    )
}

