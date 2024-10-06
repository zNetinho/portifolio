export type GenericsProps<T = unknown> = {
    children?: React.ReactNode,
    className?: string,
    [key: string]: any
} & T;