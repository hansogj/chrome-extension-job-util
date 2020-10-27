import React, { useState } from 'react'
import { PageComponent } from '../../types'
import Cmid from './cmid'
import Env, { envConfig } from './env'
import ListUsers from './listUsers'

const products = ['fondskonto', 'ekstrapensjon', 'ips']
const port = 8080
const title = 'Unitlink'

const Component = () => {
    const [env, setEnv] = useState(envConfig.localhost)
    const [cmidParam, setCmid] = useState('')

    const url = (...product: string[]) => {
        const params = [`produkt=${product}`, `periodicdeposit=500`, cmidParam]
            .filter((e) => !!e)
            .join('&')

        return [
            /localhost/.test(env) ? env : `${env}/unitlink/#/introduction/`,
            params,
        ].join('?')
    }

    return (
        <>
            <h1>{title}</h1>
            <Env onChange={setEnv} port={port} https />
            <Cmid onChange={setCmid} />

            <hr />

            <ListUsers routes={products} goto={(product) => url(product)} />
        </>
    )
}
export default {
    title,
    Component,
} as PageComponent
