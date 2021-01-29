import React, { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import 'antd/lib/card/style/css'
import styles from './Task.module.scss'
import { DeleteOutlined, CheckCircleOutlined, EditOutlined } from '@ant-design/icons'

Task.propsTypes = {
    task: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired
    })
}

export default function Task({ task, handleDelete, changeOrder, handleUpdate, setCurrentTask, ...props }) {
    const [title, setTitle] = useState(task.title)
    const [isEdit, setIsEdit] = useState(false)
    const [action, setAction] = useState('edit')
    const inputEl = useRef(null);



    const handleChange = (value) => {
        setTitle(value)
    }
    const handleAction = (action) => {

        console.log('request', action)
        switch (action) {
            case 'save':
                handleUpdate(task.id, title)
                setIsEdit(prev => !prev)
                setAction('edit')
                break;
            case 'edit':
                setAction('save')
                setIsEdit(prev => !prev)
                inputEl.current.focus();
                break
            default: return false
        }
    }

    const toggleAction = (action) => {
        switch (action) {
            case 'save':
                return <CheckCircleOutlined />
            case 'edit':
                return <EditOutlined />
        }
    }

    const dragStartHandler = (e, task) => {
        //console.log('drag', task)
        setCurrentTask(task)
    }

    const dragEndHandler = (e) => {
        e.preventDefault()
        e.target.style.background = 'white'
    }

    const dragOverHandler = (e) => {
        e.preventDefault()
        e.target.style.background = 'lightgray'
    }

    const dropHandler = (e, task) => {
        e.preventDefault()
        changeOrder(task)
        e.target.style.background = 'white'
    }
    return (
        <div
            className={styles['card']}
            draggable={true}
            onDragStart={(e) => { dragStartHandler(e, task) }}
            onDragLeave={(e) => { dragEndHandler(e) }}
            onDragEnd={(e) => { dragEndHandler(e) }}
            onDragOver={(e) => { dragOverHandler(e) }}
            onDrop={(e) => { dropHandler(e, task) }}

        >
            <input
                ref={inputEl}
                className={isEdit ? styles['title'] : styles['not-edit']}
                value={title}
                onChange={(e) => { handleChange(e.target.value) }}

            />
            <button className={styles['actions']} onClick={() => { handleAction(action) }}>
                {toggleAction(action)}
            </button>
            <button className={styles['actions']} onClick={() => { handleDelete(task.id) }}>
                <DeleteOutlined />
            </button>
        </div >
    )
}

