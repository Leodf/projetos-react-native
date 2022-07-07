import React, { Component } from 'react';
import { Button, Text, TextInput } from 'react-native'
import Estilo from '../estilos'

export default class Mega extends Component {

    state = {
        qtdeNumeros: this.props.qtdeNumeros,
        numeros: []
    }

    alterarQtdeNumero = (qtde) => {
        this.setState({ qtdeNumeros: +qtde })
    }

    gerarNumeroNaoContido = nums => {
        const novo = parseInt(Math.random() * 60) + 1
        return nums.includes(novo) ? this.gerarNumeroNaoContido(nums) : novo
    }

    gerarNumeros = () => {
        const numeros = Array(this.state.qtdeNumeros)
            .fill()
            .reduce(n => [...n, this.gerarNumeroNaoContido(n)], [] )
            .sort((a, b) => a - b)
        this.setState({ numeros })
    }

    render() {
        return (
            <>
            <Text style={Estilo.fontG}>
                Gerador de Mega-Sena
            </Text>
            <TextInput
            keyboardType={'numeric'}
                style={{borderBottomWidth: 1}}
                placeholder='Qtde de Números'
                value={`${this.state.qtdeNumeros}`}
                onChangeText={this.alterarQtdeNumero}
            />
            <Button
                title='Gerar'
                onPress={this.gerarNumeros}
            />
            <Text style={Estilo.fontG}>
                {this.state.numeros.join(',')}
            </Text>
            </>
        )
    }
}