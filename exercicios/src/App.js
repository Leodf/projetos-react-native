import React from "react"
import { Text, View , StyleSheet } from 'react-native'


import Familia from "./components/relacao/Familia"
import Membro from "./components/relacao/Membro"
// import ParImpar from "./components/ParImpar"
//import Diferenciar from "./components/Diferenciar"
// import ContadorV2 from './components/contador/ContadorV2'
// import Pai from "./components/Indireta/Pai"
// import Pai from "./components/direta/Pai"
// import Contador from "./components/Contador"
// import Botao from './components/Botao'
// import Titulo from './components/Titulo'
// import Aleatorio from "./components/Aleatorio"
// import MinMax from "./components/MinMax"
// import CompPadrao, { Comp1 , Comp2 } from './components/Multi'
// import Primeiro from './components/Primeiro'

export default () => (
    <View style = {style.App}>
        <Familia>
            <Membro nome='Bia' sobrenome='Arruda' />
            <Membro nome='Carlos' sobrenome='Arruda' />
        </Familia>
        <Familia>
            <Membro nome='Ana' sobrenome='Silva' />
            <Membro nome='Julia' sobrenome='Silva' />
            <Membro nome='Gui' sobrenome='Silva' />
            <Membro nome='Joana' sobrenome='Silva' />
        </Familia>
        {/*
        <ParImpar num={3}/>
        <Diferenciar />
        <ContadorV2 />
        <Pai />
        <Contador inicial={100} passo = {13}/>
        <Contador />
        <Botao />
        <Titulo principal='Cadastro Produto' secundario='Tela de Cadastro' />
        <Aleatorio min={10} max={60} />
        <Aleatorio min={10} max={60} />
        <Aleatorio min={10} max={60} />
        <Aleatorio min={10} max={60} />
        <Aleatorio min={10} max={60} />
        <Aleatorio min={10} max={60} />
        <MinMax min={3} max={20}/>
        <MinMax min={1} max={94}/>
        <CompPadrao />
        <Comp1 />
        <Comp2 />
        <Primeiro />*/}
    </View>
) 

const style = StyleSheet.create({
    App: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    }
})
