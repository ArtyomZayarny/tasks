import React, { useState } from 'react'
import { useTasks } from '../hooks/useTasks'
import Input from '../ui/Input/Input'
import styles from './Form.module.scss'

export default function Form(props) {
    const [formValues, setFormValues] = useState({
        title: '',
        description: ''
    })
    const { createTask } = useTasks(formValues);

    const handleSubmit = (e) => {
        e.preventDefault();
        createTask(formValues)
    }

    const changeHandler = (name, value) => {
        console.log(name, value)
        setFormValues({ ...formValues, [name]: value })
    }
    return (
        <form className={styles['form']} onSubmit={(e) => { handleSubmit(e) }}>
            <Input
                type="text"
                name="title"
                changeHandler={changeHandler}
                value={formValues.title}
            />
            <Input
                type="text"
                name="description"
                changeHandler={changeHandler}
                value={formValues.description}
            />
            <button type="submit" className={styles['addTask']}>Add</button>
        </form>
    )
}
