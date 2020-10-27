import { FunctionComponent, ReactNode } from 'react'

export interface Hash<T> {
    [key: string]: T
}

export interface PageComponent {
    title: string
    btn?: string
    Component: FunctionComponent
}
