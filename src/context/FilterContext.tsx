'use client'
import { createContext, useState } from 'react';

export const FilterContext = createContext({} as any);

export const FilterProvider = ({ children }: { children: React.ReactNode }) => {
    const [filter, setFilter] = useState<string>('all')
    return (
        <FilterContext.Provider value={{ filter, setFilter }}>
            {children}
        </FilterContext.Provider>
    )
}