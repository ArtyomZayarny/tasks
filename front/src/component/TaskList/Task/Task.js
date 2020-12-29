import React from 'react'
import PropTypes from 'prop-types'
import { Card } from 'antd';
import 'antd/lib/card/style/css'

Task.propsTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}
export default function Task({ title, description }) {
    return (
        <Card title={title} style={{ width: 300 }}>
            <p>{description}</p>
        </Card>
    )
}

