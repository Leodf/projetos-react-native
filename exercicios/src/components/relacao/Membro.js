import React from 'react'
import { Text } from 'react-native'
import Estilo from '../estilos'

export default props => {
    return (
        <Text style={Estilo.fontG}>
            {props.nome} {props.sobrenome}
        </Text>
    )
}