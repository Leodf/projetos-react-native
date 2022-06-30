import React from 'react'
import { Text } from 'react-native'
import Filho from './Membro'

export default props => {
    return (
        <>
            <Text>Membros da família</Text>
            {props.children}
            <Text>[Fim] Membros da família</Text>
        </>
    )
}