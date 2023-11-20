import { ThemeContext } from "@/context/ThemeContext"
import { useContext } from "react"

interface TodoItemProps {
    id: number,
    text: string,
    status?: string
}

export default function TodoItem(props: TodoItemProps) {
    const { theme } = useContext(ThemeContext)
    return (
        <>
            <li className={`px-5 py-2 border-b-[1px] ${theme == 'dark' ? 'border-dark-text-concluded bg-dark-bg-main' : 'border-light-text-concluded bg-light-bg-main'} rounded-t-md ${theme == 'dark' ? `${props.status === 'done' ? 'text-dark-text-secondary line-through' : 'text-dark-text-hover'}` : `${props.status === 'done' ? 'text-light-text-secondary line-through' : 'text-dark-bg-main'}`} flex items-center text-ellipsis h-12`}>
                <button onClick={() => {
                    const tasks = JSON.parse(localStorage.getItem('tasks') || '[]')
                    if (tasks[props.id].status === 'todo')
                        tasks[props.id].status = 'done'
                    else
                        tasks[props.id].status = 'todo'
                    localStorage.setItem('tasks', JSON.stringify(tasks))
                }}
                    className={`w-7 h-7 flex justify-center items-center rounded-full border border-dark-text-secondary mr-4 ${props.status === 'done' ? 'bg-gradient-to-r p-2' : 'p-[13px]'} from-[#57ddff] to-[#c058f3]`}>
                    {props.status === 'done' ? <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9"><path fill="none" stroke="#FFF" stroke-width="2" d="M1 4.304L3.696 7l6-6" /></svg> : null}
                </button>
                <input className='w-full text-ellipsis bg-transparent'
                    style={{ pointerEvents: 'none', userSelect: 'none', cursor: 'default', }}
                    type="text" value={props.text} disabled />
                <button onClick={() => {
                    const tasks = JSON.parse(localStorage.getItem('tasks') || '[]')
                    tasks.splice(props.id, 1)
                    localStorage.setItem('tasks', JSON.stringify(tasks))
                }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="#494C6B" fill-rule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z" /></svg>
                </button>
            </li >
        </>
    )
}
