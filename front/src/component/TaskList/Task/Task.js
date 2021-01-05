import React from 'react'
import PropTypes from 'prop-types'
import { Card } from 'antd';
import 'antd/lib/card/style/css'
import styles from './Task.module.css'

Task.propsTypes = {
    task: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired
    })
}
export default function Task({ task }) {
    return (
        <Card title={task.title} className={styles.card}>
            <p>{task.description}</p>
        </Card>
    )
}

