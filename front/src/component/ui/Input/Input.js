import React from 'react'
import PropTypes from 'prop-types'

Input.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
    value: PropTypes.string,
    changeHandler: PropTypes.func
}

export default function Input({ type, name, value, changeHandler }) {
    return (
        <>
            <input
                name={name}
                type={type}
                value={value}
                onChange={(e) => { changeHandler(name, e.target.value) }}
                required={true}
            />
        </>
    )
}

