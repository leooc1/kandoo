import { FilterContext } from '@/context/FilterContext'
import { ThemeContext } from '@/context/ThemeContext'
import { useState, useEffect, useContext } from 'react'

export default function Filters() {
  const { theme } = useContext(ThemeContext)
  const [todos, setTodos] = useState([])
  const { filter, setFilter } = useContext(FilterContext)
  function LeftTasks() {
    let tasks = todos.filter((task: any) => task.status === 'todo')
    return tasks.length
  }
  useEffect(() => {
    let tasks = JSON.parse(localStorage.getItem('tasks') || '[]')
    setTodos(tasks)
  }, [todos])

  function removeActive() {
    const buttons = document.querySelectorAll('.btn')
    buttons.forEach((button) => {
      button.classList.remove('text-blue-500')
      button.classList.remove('font-bold')
    })
  }

  return (
    <>
      <div className={`flex ${theme == 'dark' ? 'bg-dark-bg-main text-dark-text-secondary' : 'bg-light-bg-main text-light-text-secondary'} py-2 rounded-b-md justify-between px-2 text-sm`}>
        <div className='font-bold'>{LeftTasks()} items left</div>
        <div className='w-2/5 sm:flex justify-between hidden'>
          <button className={`${theme == 'dark' ? 'sm:hover:text-dark-text-hover' : 'sm:hover:text-light-text-hover'} btn ${filter == 'all' ? 'text-blue-500 font-bold' : ''}`} onClick={(button) => {
            removeActive()
            button.currentTarget.classList.add('text-blue-500')
            button.currentTarget.classList.add('font-bold')
            setFilter('all')
          }}>All</button>
          <button className={`${theme == 'dark' ? 'sm:hover:text-dark-text-hover' : 'sm:hover:text-light-text-hover'} btn ${filter == 'active' ? 'text-blue-500 font-bold' : ''}`} onClick={(button) => {
            removeActive()
            button.currentTarget.classList.add('text-blue-500')
            button.currentTarget.classList.add('font-bold')
            setFilter('active')
          }}>Active</button>
          <button className={`${theme == 'dark' ? 'sm:hover:text-dark-text-hover' : 'sm:hover:text-light-text-hover'} btn ${filter == 'completed' ? 'text-blue-500 font-bold' : ''}`} onClick={(button) => {
            removeActive()
            button.currentTarget.classList.add('text-blue-500')
            button.currentTarget.classList.add('font-bold')
            setFilter('completed')
          }}>Completed</button>
        </div>
        <button className={`${theme == 'dark' ? 'hover:text-dark-text-hover' : 'hover:text-light-text-hover'}`} onClick={() => {
          const tasks = JSON.parse(localStorage.getItem('tasks') || '[]')
          let clear = tasks.filter((task: any) => { return task.status === 'todo' })
          localStorage.setItem('tasks', JSON.stringify(clear))
        }}>Clear Completed</button>
      </div>
      <div className={`w-full sm:hidden justify-between flex px-5 py-2 mt-3 ${theme == 'dark' ? 'bg-dark-bg-main text-dark-text-secondary' : 'bg-light-bg-main text-light-text-secondary'} rounded-md shadow-xl shadow-[#0000003f]`}>
        <button className={`${theme == 'dark' ? 'sm:hover:text-dark-text-hover' : 'sm:hover:text-light-text-hover'} btn ${filter == 'all' ? 'text-blue-500 font-bold' : ''}`} onClick={(button) => {
          removeActive()
          button.currentTarget.classList.add('text-blue-500')
          button.currentTarget.classList.add('font-bold')
          setFilter('all')
        }}>All</button>
        <button className={`${theme == 'dark' ? 'sm:hover:text-dark-text-hover' : 'sm:hover:text-light-text-hover'} btn ${filter == 'active' ? 'text-blue-500 font-bold' : ''}`} onClick={(button) => {
          removeActive()
          button.currentTarget.classList.add('text-blue-500')
          button.currentTarget.classList.add('font-bold')
          setFilter('active')
        }}>Active</button>
        <button className={`${theme == 'dark' ? 'sm:hover:text-dark-text-hover' : 'sm:hover:text-light-text-hover'} btn ${filter == 'completed' ? 'text-blue-500 font-bold' : ''}`} onClick={(button) => {
          removeActive()
          button.currentTarget.classList.add('text-blue-500')
          button.currentTarget.classList.add('font-bold')
          setFilter('completed')
        }}>Completed</button>
      </div>
    </>
  )
}
