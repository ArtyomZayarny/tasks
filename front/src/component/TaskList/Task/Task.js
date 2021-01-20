import React from 'react'
import PropTypes from 'prop-types'
import 'antd/lib/card/style/css'
import styles from './Task.module.scss'
import { DeleteOutlined } from '@ant-design/icons'

Task.propsTypes = {
    task: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired
    })
}

export default function Task({ task, handleDelete, ...props }) {
    return (
        <div className={styles['card']} >
            <h2 className={styles['title']}>{task.title}</h2>
            <button className={styles['delete']} onClick={() => { handleDelete(task.id) }}>
                <DeleteOutlined />
            </button>
        </div>
    )
}

