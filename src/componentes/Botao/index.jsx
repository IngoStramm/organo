import style from './Botao.module.scss'

const Botao = ({ children }) => {
    return (
        <button className={style.btn}>
            {children}
        </button>
    )
}

export default Botao