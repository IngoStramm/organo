import style from './Rodape.module.scss'
import fb from '../../assets/images/fb.png'
import tw from '../../assets/images/tw.png'
import ig from '../../assets/images/ig.png'
import logo from '../../assets/images/logo.png'

const Rodape = () => {
    return (
        <footer className={style.wrapper}>
            <div className={style.container}>
                <ul className={style['social-media']}>
                    <li><a href="#"><img src={fb} /></a></li>
                    <li><a href="#"><img src={tw} /></a></li>
                    <li><a href="#"><img src={ig} /></a></li>
                </ul>
                <img className={style.logo} src={logo} alt="Organo" />
                <span className={style.powered}>Desenvolvido por Alura.</span>
            </div>
        </footer>
    )
}

export default Rodape