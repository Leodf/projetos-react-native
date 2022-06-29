import React, { Fragment } from "react";
import {View, Text} from 'react-native'
import Estilo from './estilos'

export default props => (
    <Fragment key='1'>
        <Text style={Estilo.fontG}>{props.principal}</Text>
        <Text>{props.secundario}</Text>
    </Fragment>
)