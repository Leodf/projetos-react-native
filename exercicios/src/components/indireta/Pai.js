import React, { useState } from 'react'
import { Text } from 'react-native'
import estilos from '../estilos'
import Filho from "./Filho"

export default props => {

    const [texto, setTexto] = useState('')
    const [num, setNum] = useState(0)

    function exibirValor(numero, texto) {
        setNum(numero)
        setTexto(texto)
    }

    return (
        <>
            <Text style={estilos.fontG}>
                {texto}{num}</Text>
            <Filho 
                min={1}
                max={60}
                funcao={exibirValor}
            />
        </>
    )
}