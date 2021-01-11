import React, { useState } from 'react'
import { useTasks } from '../hooks/useTasks'
import Input from '../ui/Input/Input'
import styles from './Form.module.scss'
import { Button } from 'antd';
import { Spin } from 'antd';

export default function Form(props) {
    const [formValues, setFormValues] = useState({
        title: '',
        description: ''
    })
    const { createTask, loading } = useTasks(formValues);

    const handleSubmit = (e) => {
        e.preventDefault();
        createTask(formValues)
    }

    const changeHandler = (name, value) => {
        console.log(name, value)
        setFormValues({ ...formValues, [name]: value })
    }
    return (
        <>
            {!loading && <form className={styles['form']} onSubmit={(e) => { handleSubmit(e) }}>
                <Input
                    type="text"
                    name="title"
                    changeHandler={changeHandler}
                    value={formValues.title}
                    required="true"
                />
                <Button htmlType="submit">Add</Button>
            </form>}
            {loading && <Spin />}
        </>
    )
}

