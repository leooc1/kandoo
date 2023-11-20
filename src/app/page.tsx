'use client'
import Main from '@/components/Main'
import TopImage from '@/components/TopImage'
import TodoItem from '@/components/todo/TodoItem'
import { FilterContext } from '@/context/FilterContext'
import { ThemeContext } from '@/context/ThemeContext'
import { Josefin_Sans } from 'next/font/google'
import { useContext, useEffect, useState } from 'react'
const font = Josefin_Sans({ subsets: ['latin'], weight: ['400', '700'] })

export default function Home() {
  const { theme } = useContext(ThemeContext)
  const { filter } = useContext(FilterContext)
  const [todos, setTodos] = useState([])
  const [todoFilter, setTodoFilter] = useState([])
  useEffect(() => {
    let tasks = JSON.parse(localStorage.getItem('tasks') || '[]')
    setTodos(tasks)
    if (filter == 'active') {
      setTodoFilter(tasks.filter((task: any) => { return task.status !== 'done' }))
    }
    else if (filter == 'completed') {
      setTodoFilter(tasks.filter((task: any) => { return task.status === 'done' }))
    }
    else {
      setTodoFilter(tasks)
    }
  }, [todos, todoFilter])

  return (<>
    <main className={`min-h-screen full-scroll grid ${font.className} overflow-hidden`} style={{ gridTemplateRows: '250px 1fr' }}>
      <TopImage />
      <section className={`${theme == 'dark' ? 'bg-dark-bg-color' : 'bg-light-bg-color'}`}>
        <Main>
          {todoFilter.map((todo: any, index: number) => (
            <TodoItem key={index} id={index} text={todo.task} status={todo.status} />
          ))}
        </Main>
      </section>
    </main>
  </>
  )
}
