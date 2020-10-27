import React, { useState } from 'react'
import { PageComponent } from '../../types'
import { serialize } from '../../utils'
import { Block } from '../styled'
import Cmid from './cmid'
import Env, { envConfig } from './env'
import ListUsers from './listUsers'

const port = 9002
const realm = 'realm=storebrand'
const title = 'Fmi'
export const Component = () => {
    const [env, setEnv] = useState(envConfig.localhost)
    const [cmidParam, setCmid] = useState('')
    const base = [env, 'fpi', 'start.html'].join('/') // `${env}/fpi/start.html?";

    return (
        <>
            <h1>{title}</h1>
            <Env onChange={setEnv} port={port} />
            <Cmid onChange={setCmid} />
            <hr />
            <Block style={{ width: '90%' }}>
                <ListUsers
                    routes={['FMI']}
                    goto={() =>
                        serialize(
                            base,
                            [realm, cmidParam].filter((e) => !!e)
                        )
                    }
                />
            </Block>
        </>
    )
}

export default {
    title,
    Component,
} as PageComponent
