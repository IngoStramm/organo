import { useEffect, useState } from 'react';
import Botao from '../Botao';
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa';
import style from './Formulario.module.scss'

const Formulario = ({ newCollabEvt, times }) => {

    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        newCollabEvt({
            nome,
            cargo,
            imagem,
            time,
        })
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }

    useEffect(() => {
        // console.log(time);
    }, [time])

    return (
        <section className={style.wrapper}>
            <form onSubmit={handleSubmit}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <CampoTexto
                    label='Nome'
                    name='nome'
                    placeholder="Digite seu nome"
                    value={nome}
                    onchange={e => setNome(e.target.value)}
                // required={true}
                />
                <CampoTexto
                    label='Cargo'
                    name='cargo'
                    placeholder="Digite seu cargo"
                    value={cargo}
                    onchange={e => setCargo(e.target.value)}
                // required={true}
                />
                <CampoTexto
                    label='Imagem'
                    name='imagem'
                    placeholder="Informe o endereço da imagem"
                    value={imagem}
                    onchange={e => setImagem(e.target.value)}
                />
                <ListaSuspensa
                    label='Time'
                    name='time'
                    firstOptionText='Selecione uma opção...'
                    items={times}
                    selectedOption={time}
                    onchange={e => setTime(e.target.value)}
                // required={true}
                />
                <Botao>Criar card</Botao>
            </form>
        </section>
    )
}

export default Formulario