import React from 'react'
import { PlusCircleOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types'


Button.propTypes = {
    showForm: PropTypes.func
}

export default function Button({ showForm, ...props }) {
    return (
        <button className="plus" onClick={() => { showForm(true) }}>
            <PlusCircleOutlined />
            <span>{props.children}</span>
        </button>
    )
}

