export type GenericsProps<T = unknown> = {
    children?: React.ReactNode,
    className?: string
} & T;