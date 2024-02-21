import { ILoading } from '@/interfaces'

export function Loading({ size }: ILoading) {
    let loadingSize;

    switch(size) {
        case 'sm': loadingSize = 'w-6 h-6 border-2'; break;
        case 'md': loadingSize = 'w-12 h-12 border-4'; break;
        case 'lg': loadingSize = 'w-24 h-24 border-8'; break;
        default: loadingSize = 'w-12 h-12 border-4'; break;
    }

    return (
        <div className={`${loadingSize} border-zinc-800 border-e-transparent animate-spin rounded-full mx-auto`}></div>
    )
}