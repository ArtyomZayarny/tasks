import React, { useState } from 'react'
import TaskList from '../TaskList/TaskList'
import TasksProvider from '../Providers/TasksProvider'

import styles from './Column.module.scss'

export default function Column(props) {

    return (
        <div className={styles['column']} style={{ backgroundColor: '#ebecf0' }}>
            <h2>Your tasks</h2>

            <TasksProvider >
                {
                    (tasksList, addTask, loading, handleDelete, handleUpdate, error) => {
                        return <TaskList
                            error={error}
                            tasks={tasksList}
                            addTask={addTask}
                            loading={loading}
                            handleDelete={handleDelete}
                            handleUpdate={handleUpdate}
                        />
                    }
                }
            </TasksProvider>

        </div>
    )
}

