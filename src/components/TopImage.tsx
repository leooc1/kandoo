import { ThemeContext } from '@/context/ThemeContext'
import { useContext } from 'react'
import TradeTheme from './TradeTheme'
import TradeMode from './TradeMode'

export default function TopImage() {
    const { theme } = useContext(ThemeContext)
    return (
        <section className={`${theme == 'dark' ? 'sm:bg-dark-image bg-dark-image-mobile' : 'sm:bg-light-image bg-light-image-mobile'} bg-center bg-cover flex items-center`}>
            <div className='flex w-full justify-evenly items-center pb-10'>
                <h1 className='font-bold text-white text-4xl'>KANDOO</h1>
                <TradeMode />
                <TradeTheme />
            </div>
        </section>
    )
}
