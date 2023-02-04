import style from './Colaborador.module.scss'

const Colaborador = ({nome, cargo, imagem}) => {
    return (
        <article className={style.wrapper}>
            <header>
                <img src={imagem} alt={nome} />
            </header>
            <footer>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </footer>
        </article>
    )
}

export default Colaborador