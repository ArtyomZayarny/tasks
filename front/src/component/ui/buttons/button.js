import React from 'react'
import { PlusCircleOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types'


Button.propTypes = {
    showForm: PropTypes.func,
    className: PropTypes.string.isRequired
}

export default function Button({ showForm, className, ...props }) {
    return (
        <button className={className} onClick={() => { showForm(true) }}>
            <PlusCircleOutlined />
            <span>{props.children}</span>
        </button>
    )
}

