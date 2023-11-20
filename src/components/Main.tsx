import { ThemeContext } from '@/context/ThemeContext'
import React, { useContext } from 'react'
import Form from './Form'
import Filters from './todo/Filters'
import { ModeContext } from '@/context/ModeContext'
interface MainProps {
  children: React.ReactNode
}

export default function Main(props: MainProps) {
  const { theme } = useContext(ThemeContext)
  const { mode } = useContext(ModeContext)
  return (
    <section className='w-80 sm:w-96 md:w-1/2 mx-auto relative -top-24'>
      <Form />
      {mode ?
        <></>
        :
        <>
          <ul className={`w-full ${theme == 'dark' ? 'bg-dark-bg-main' : 'bg-light-bg-main'} rounded-t-md shadow-xl shadow-[#00000093] min-h-[20px] max-h-80 overflow-y-scroll scroll-list`}>
            {props.children}
          </ul>
          <Filters />
        </>
      }
    </section>
  )
}
