export interface IInput {
    type?: string
    name: string
    label?: string
    placeholder: string
    required?: boolean
}

export interface IButton {
    title: string
    type?: 'button' | 'submit'
}

export interface ILoading {
    size?: 'sm' | 'md' | 'lg'
}