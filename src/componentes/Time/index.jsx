import Colaborador from '../Colaborador'
import style from './Time.module.scss'

const Time = ({ nome, classname, colaboradores }) => {
    const exibeColaboradores = () => (
        colaboradores.map((colaborador, index) => (
            <li key={index}>
                <Colaborador
                    nome={colaborador.nome}
                    cargo={colaborador.cargo}
                    imagem={colaborador.imagem}
                />
            </li>
        ))
    )
    return (
        colaboradores.length > 0 && <section
            className={`${style.wrapper} ${style[classname]}`}
        >
            <div className={style.container}>
                <h3>{nome}</h3>
                <ul className={style['lista-colaboradores']}>
                    {exibeColaboradores()}
                </ul>
            </div>
        </section>
    )
}

export default Time 