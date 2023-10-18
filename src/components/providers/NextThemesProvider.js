'use client'

import { ThemeProvider } from 'next-themes'

export function NextThemesProvider({ children }) {
    return <ThemeProvider>

        {children}

    </ThemeProvider>
}