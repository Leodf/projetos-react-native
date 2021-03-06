import React from 'react'
import { Text } from 'react-native'
import Estilo from '../estilos'

import produtos from './produtos'

export default props => {
    function obterLista(){
        return produtos.map(p => {
            return (
            <Text key={p.id}>{p.id}) {p.nome} tem R$ {p.preco}</Text>
            )
        })
    }
    return (
        <>
        <Text style={Estilo.fontG}>
            Lista de Produtos
        </Text>
        {obterLista()}
        </>
    )
}