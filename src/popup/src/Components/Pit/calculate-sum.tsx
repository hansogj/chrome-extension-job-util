import React, { FunctionComponent, useState } from 'react'
import { Input } from '../Elements/input'
import { Column, Row } from '../styled'
import * as utils from './time-utils'

export const CalculateSum: FunctionComponent<{}> = () => {
    const [sum, setSum] = useState('0')
    return (
        <>
            <h3>Sum av timer</h3>
            <Row>
                <Column>
                    <Input
                        type="text"
                        onChange={(e) => {
                            setSum(utils.sum(e.target.value))
                        }}
                    />
                </Column>
                <Column> {`Summerer til ${sum}`} </Column>
            </Row>
        </>
    )
}
