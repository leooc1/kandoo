'use client'
import { createContext, useState } from 'react';

export const ModeContext = createContext({} as any);

export const ModeProvider = ({ children }: { children: React.ReactNode }) => {
    const [mode, setMode] = useState<boolean>(false)
    return (
        <ModeContext.Provider value={{ mode, setMode }}>
            {children}
        </ModeContext.Provider>
    )
}