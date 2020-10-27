import React, { useState } from 'react'
import { PageComponent } from '../../types'
import Env, { envConfig } from './env'
import ListUsers, { RouteForContract } from './listUsers'

const routes = ['investment', 'tradeaccount', 'savings', 'withdrawal']
const port = 3000
const title = 'Self Service Unitlink Web'

const Component = () => {
    const [env, setEnv] = useState(envConfig.localhost)

    const url = (...path: string[]) =>
        /localhost/.test(env)
            ? [env, '#', ...path].join('/')
            : [env, 'selfservice-unitlink-web', '#', ...path].join('/')

    return (
        <>
            <h1>{title}</h1>
            <Env onChange={setEnv} port={port} />
            <hr />
            <RouteForContract
                routes={routes}
                goto={(route, contractNumber) => url(route, contractNumber)}
            />
            <hr />

            <ListUsers
                routes={routes}
                goto={(route, contractNumber) => url(route, contractNumber)}
            />
        </>
    )
}
export default {
    title,
    btn: 'SSulWeb',
    Component,
} as PageComponent
