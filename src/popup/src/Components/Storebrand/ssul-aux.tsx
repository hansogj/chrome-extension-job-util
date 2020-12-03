import React, { useState } from 'react'
import { PageComponent } from '../../types'
import Env, { envConfig } from './env'
import ListUsers, { RouteForContract } from './listUsers'

const routes = ['fondsbytte', 'beholdning', 'fondsliste']
const port = 8000
const title = 'Link Selvbetjening'
const btn = 'AUX'
const Component = () => {
    const [env, setEnv] = useState(envConfig.localhost)

    const url = (...path: string[]) =>
        [env, 'link-selvbetjening', ...path].join('/')

    const goto = (route: string, contractNumber: string) =>
        url(contractNumber, route)
    return (
        <>
            <h1>{title}</h1>
            <Env onChange={setEnv} port={port} />
            <hr />
            <RouteForContract {...{ routes, goto }} />
            <hr />
            <ListUsers {...{ routes, goto }} />
        </>
    )
}
export default {
    title,
    btn,
    Component,
} as PageComponent
