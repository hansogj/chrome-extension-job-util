import React from 'react'
import { useState } from 'react'
import { capitalize, copyStringToClipboard } from '../../utils'
import { Input, FormContainer } from '../Elements/input'
import Link from '../Elements/Link'
import { base, Block, Column, Row, Title } from '../styled'
import { users } from './users'

export interface ListUsersProps {
    routes: string[]
    goto: (route: string, contractNumber: string) => string
}

interface ListRoutesProps extends ListUsersProps {
    fnr: string
    contractNumber: string
}

export const ListRoutes = ({
    goto,
    routes,
    fnr,
    contractNumber,
}: ListRoutesProps) => (
    <>
        {routes.map((route) => (
            <Column key={`route-${route}`}>
                <Link
                    goto={goto(route, contractNumber)}
                    onClick={() => copyStringToClipboard(fnr)}
                >
                    {capitalize(route)}
                </Link>
            </Column>
        ))}
    </>
)

export const RouteForContract = (props: ListUsersProps) => {
    const fnr = '123'
    const [contractNumber, setContractNumber] = useState('')
    return (
        <FormContainer>
            <Block>
                <h3>Lag midlertidig kontraktslenke</h3>
                <Row style={{ padding: `${base} 0` }}>
                    <Column nowrap style={{ maxWidth: '25%' }}>
                        <label>Kontraktsnummer:</label>
                        <Input
                            type="number"
                            onChange={(e) => setContractNumber(e.target.value)}
                        />
                    </Column>
                </Row>
            </Block>
            <Block>
                <Row>
                    <ListRoutes
                        {...{ ...props, ...{ fnr }, ...{ contractNumber } }}
                    />
                </Row>
            </Block>
        </FormContainer>
    )
}

export default (props: ListUsersProps) => (
    <>
        {users.map(({ name, contractNumber, fnr }) => (
            <Block
                key={`block-*-${contractNumber}`}
                style={{ marginBottom: `${base}` }}
            >
                <Title onClick={() => copyStringToClipboard(fnr)}>
                    {name} [ {contractNumber}]
                </Title>
                <Row>
                    <ListRoutes
                        {...{ ...props, ...{ fnr }, ...{ contractNumber } }}
                    />
                </Row>
            </Block>
        ))}
    </>
)
