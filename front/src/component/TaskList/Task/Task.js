import React from 'react'
import PropTypes from 'prop-types'
import { Card } from 'antd';
import 'antd/lib/card/style/css'
import styles from './Task.module.scss'

Task.propsTypes = {
    task: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired
    })
}
export default function Task({ task }) {
    return (
        <Card className={styles['card']} bodyStyle={{ padding: 15 }}>
            <h2 className={styles['title']}>{task.title}</h2>
        </Card>
    )
}

