import './Formulario.css'
import CampoTexto from '../CampoTexto/CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao'
import { useState } from 'react'

const Formulario = (props) => {

    const aoSalvar = (evento) => {
        evento.preventDefault();
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        })
        
        setCargo('')
        setImagem('')
        setNome('')
    }


    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');
    
    
    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados abaixo</h2>
                <CampoTexto 
                 valor={nome}
                 aoAlterado={valor => setNome(valor)}
                 obrigatorio={true} 
                 label="Nome" 
                 placeholder="Digite o nome"/>
                <CampoTexto valor={cargo} aoAlterado={valor=> setCargo(valor)} label="Cargo" placeholder="Digite o cargo"/>
                <CampoTexto valor={imagem} aoAlterado={valor=> setImagem(valor)} label="Imagem" placeholder="Digite o endereço da imagem"/>
                <ListaSuspensa  
                    obrigatorio={true} 
                    label="Time" 
                    itens={props.time}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                    >

                </ListaSuspensa>
                <Botao >Criar Card</Botao>                
            </form>
        </section>

    )
}

export default Formulario