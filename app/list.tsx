'use client'

import React, { useState } from "react"
import { useListLogic } from "./listLogic"
export default function List() {
    const [input, setInput] = useState('')

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value)
    }

    const {
        tasks,
        addTask,
        deleteTask,
        deleteAll
    } = useListLogic()

    return (
        <div>
            <h1>To-do list</h1>

            <div className="input-field">
                <label htmlFor="input">Digite uma tarefa:</label>
                <input type="text" id="input" value={input} onChange={handleInputChange} placeholder="Type a task" />

                <button onClick={() => {
                    addTask(input)
                    setInput('')
                }}>Add</button>

                <button onClick={deleteAll}>Delete all</button>
            </div>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        {task.text}
                        <button onClick={() => deleteTask(task.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}