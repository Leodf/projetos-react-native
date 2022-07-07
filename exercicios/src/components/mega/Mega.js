import React, { Component } from 'react';
import { Text, TextInput } from 'react-native'
import Estilo from '../estilos'

export default class Mega extends Component {

    state = {
        qtdeNumeros: this.props.qtdeNumeros
    }

    alterarQtdeNumero(qtde) {
        this.setState({ qtdeNumeros: qtde })
    }

    render() {
        return (
            <>
            <Text style={Estilo.fontG}>
                Gerador de Mega-Sena 
                {this.state.qtdeNumeros}
            </Text>
            <TextInput
                placeholder='Qtde de Números'
                value={this.state.qtdeNumeros}
                onChangeText={this.alterarQtdeNumero}
            />
            </>
        )
    }
}