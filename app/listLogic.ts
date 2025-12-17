import { useState } from "react"

export type Task = {
    id: number
    text: string
}

export function useListLogic() {
    const [tasks, setTasks] = useState<Task[]>([])

    function addTask(text: string) {
        if (!text.trim()) return

        const newTask: Task = {
            id: Date.now(),
            text
        }
        setTasks(prev => [...prev, newTask])
    }

    function deleteTask(id: number) {
        setTasks(prev => prev.filter(task => task.id !== id))
    }

    function deleteAll() {
        setTasks([])
    }

    return {
        tasks,
        addTask,
        deleteAll,
        deleteTask,
    }
}