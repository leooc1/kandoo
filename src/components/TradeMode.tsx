import { ModeContext } from '@/context/ModeContext'
import React, { useContext } from 'react'

export default function TradeMode() {
    const { setMode } = useContext(ModeContext)
    return (
        <>
            <label className="switch relative"
                onClick={() => {
                    const button = document.querySelector('.mode-button') as HTMLInputElement
                    setMode(button.checked)
                }}>
                <span className='absolute left-1/2 -translate-x-1/2 -bottom-6 text-white text-sm'>MODE</span>
                <input type="checkbox" className='mode-button' />
                <span className="slider"></span>
            </label>
        </>
    )
}
