import React, { FunctionComponent, useState } from 'react'
import { FormContainer, Input } from '../Elements/input'
import { Column, Row } from '../styled'
import * as utils from './time-utils'

export const CalculateHours: FunctionComponent<{}> = () => {
    const [hh, setHH] = useState(0)
    const [mm, setMM] = useState(0)
    const [tid, setTid] = useState({ hh, mm } as utils.Tid)

    return (
        <FormContainer>
            <h3>Når kom du på jobb?</h3>

            <Row>
                <Column nowrap style={{ maxWidth: '25%' }}>
                    <label>hh:</label>
                    <Input
                        width={4}
                        type="number"
                        onChange={(e) => {
                            setHH(parseInt(e.target.value))
                        }}
                    />
                </Column>

                <Column nowrap style={{ maxWidth: '25%' }}>
                    <label>mm: </label>
                    <Input
                        width={4}
                        type="number"
                        onChange={(e) => {
                            setMM(parseInt(e.target.value))
                            setTid(utils.tid(hh, mm))
                        }}
                    />
                </Column>

                <Column style={{ maxWidth: '25%' }}>
                    {`Det er nå ${tid.hh} timer og ${tid.mm} minutter siden du kom på jobb`}
                </Column>
            </Row>
        </FormContainer>
    )
}
