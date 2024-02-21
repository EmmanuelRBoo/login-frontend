import { IInput } from '@/interfaces'

export function Input({ name, placeholder, label, required, type = 'text' }: IInput) {
    return (
        <label 
            htmlFor={name}
            className='flex flex-col font-semibold text-zinc-950 gap-2'
        >
            {label && (
                <span>
                    {label}
                    {required && <b className='text-red-600'>*</b>}
                </span>
            )}

            <input 
                type={type} 
                placeholder={placeholder} 
                name={name}
                className='border-2 border-zinc-500 p-1 rounded-md font-medium placeholder:text-zinc-500 focus:outline-none'
            />
        </label>
    )
}