import type { Metadata } from 'next'

import { ILayout } from '@/interfaces'

import './globals.css'

export const metadata: Metadata = {
    title: 'Login',
}

export default function RootLayout({ children }: Readonly<ILayout>) {
    return (
        <html>
            <body>
                {children}
            </body>
        </html>
    ) 
}
