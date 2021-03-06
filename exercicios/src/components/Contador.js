import React, { Fragment, useState } from "react";
import {Text, Button} from 'react-native'
import Estilo from './estilos'

export default ({ inicial = 0, passo = 1}) => {
    // let numero = props.inicial
    const [numero, setNumero] = useState(inicial)

    const inc = () => setNumero(numero + passo)
    const dec = () => setNumero(numero - passo)

    return (
        <Fragment>
            <Text style={Estilo.fontG}>{numero}</Text>
            <Button title="+" onPress={inc}/>
            <Button title="-" onPress={dec}/>
        </Fragment>
    )
}