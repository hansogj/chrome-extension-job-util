import React, { useState } from 'react'
import { PageComponent } from '../../types'
import Env, { envConfig } from './env'
import ListUsers, { RouteForContract } from './listUsers'

const routes = ['Beholdning', 'Transaksjoner', 'Verdiutvikling']
const port = 9091
const title = 'Link På Nett'
const btn = 'Lpn'
const Component = () => {
    const [env, setEnv] = useState(envConfig.localhost)

    const url = (...path: string[]) =>
        [env, 'lpn/mo', ...path.defined()].join('/')
    const goto = (route: string, contractNumber: string) =>
        url(contractNumber, route + '_input.action')
    const alter = (link: string) => `${link.split('_').shift()}`
    return (
        <>
            <h1>{title}</h1>
            <Env onChange={setEnv} port={port} />
            <hr />
            <RouteForContract {...{ routes, goto, alter }} />
            <hr />
            <ListUsers {...{ routes, goto, alter }} />
        </>
    )
}
export default {
    title,
    btn,
    Component,
} as PageComponent
