import React, { useState } from 'react'
import { useTasks } from './hooks/useTasks'

import Input from './ui/Input/Input'



export default function Form(props) {
    const [formValues, setFormValues] = useState({
        title: '',
        description: ''
    })
    const { createTask } = useTasks(formValues);

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(formValues)
        createTask(formValues)
        //console.log('submit')
    }

    const changeHandler = (name, value) => {
        console.log(name, value)
        setFormValues({ ...formValues, [name]: value })
    }
    return (
        <form onSubmit={(e) => { handleSubmit(e) }}>
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
            <button type="submit">Add</button>
        </form>
    )
}

