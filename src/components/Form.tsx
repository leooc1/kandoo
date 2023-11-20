import { ThemeContext } from "@/context/ThemeContext"
import { stringify } from "querystring"
import { useContext } from "react"

export default function Form() {
    const { theme } = useContext(ThemeContext)
    return (
        <form action="/" method='POST' onSubmit={(e) => {
            e.preventDefault()
            const req = e.target as HTMLFormElement
            const tasks = JSON.parse(localStorage.getItem('tasks') || '[]')
            if (req.task.value.length == 0) { }
            else {
                fetch('/api/add',{
                    method: 'POST',
                    body:JSON.stringify({ task: req.task.value, status: 'todo' })
                })
                if (tasks.push({ task: req.task.value, status: 'todo' })) {
                    console.log('task added')
                } else {
                    console.log('task not added')
                }
                localStorage.setItem('tasks', JSON.stringify(tasks))
                req.task.value = ''
            }

        }}>
            <input placeholder='Create a new task' type="text" name='task'
                className={`focus:border-0 focus:outline-none shadow-2xl
            mb-5 w-full 
            ${theme == 'dark' ? 'bg-dark-bg-main text-dark-text-main placeholder:text-dark-text-secondary shadow-[#000000]' : 'bg-light-bg-main text-light-text-hover placeholder:text-light-text-secondary shadow-[#00000069]'} px-5 py-2 rounded-md`} />
        </form>
    )
}
