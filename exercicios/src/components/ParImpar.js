import React from 'react'
import { View, Text } from 'react-native'
import Estilo from './estilos'

export default ({num = 0}) => {

        return (
            <View>
                <Text style={Estilo.fontG}>O resultado é:</Text>
                {num % 2 === 0
                    ? <Text style={Estilo.fontG}>Par</Text>
                    : <Text style={Estilo.fontG}>Ímpar</Text>
                }
            </View>
        )
    }
