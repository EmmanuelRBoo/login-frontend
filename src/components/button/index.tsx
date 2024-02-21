'use client'

import { useFormStatus } from 'react-dom'

import { IButton } from '@/interfaces'
import { Loading } from '..'

export function Button({ title, type = 'submit' }: IButton) {
    const { pending } = useFormStatus()

    return (
        <button
            type={type}
            disabled={pending}
            className=' bg-green-500 w-full h-10 font-medium cursor-pointer rounded-md disabled:opacity-80'
        >
            {
                pending
                ? <Loading size='sm'/>
                : title
            }
        </button>
    )
}