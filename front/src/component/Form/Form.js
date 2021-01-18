import React, { useState } from 'react'
import Input from '../ui/Input/Input'
import styles from './Form.module.scss'
import { Button } from 'antd';

export default function Form({ addTask, ...props }) {
    const [showForm, setShowForm] = useState(false)
    const [formValues, setFormValues] = useState({
        title: '',
        description: ''
    })

    const handleSubmit = async (e) => {
        e.preventDefault();
        addTask(formValues)
        setShowForm(false)
        setFormValues({ ...formValues, title: '' })
    }

    const changeHandler = (name, value) => {
        setFormValues({ ...formValues, [name]: value })
    }
    return (
        <>
            {showForm && <form className={styles['form']} onSubmit={(e) => { handleSubmit(e) }}>
                <Input
                    type="text"
                    name="title"
                    changeHandler={changeHandler}
                    value={formValues.title}
                    required="true"
                />
                <Button htmlType="submit" >Add</Button>
            </form>}
            {!showForm && <Button className={styles['plus']} onClick={() => { setShowForm(true) }}> + Add new task</Button>}
        </>
    )
}

