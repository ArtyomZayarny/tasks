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
                    (tasksList, addTask, loading, handleDelete) => {
                        return <TaskList
                            tasks={tasksList}
                            addTask={addTask}
                            loading={loading}
                            handleDelete={handleDelete}
                        />
                    }
                }
            </TasksProvider>

        </div>
    )
}

