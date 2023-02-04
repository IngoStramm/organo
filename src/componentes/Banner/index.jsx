import bannerImage from '../../assets/images/banner.png'
import style from './Banner.module.scss'

const Banner = () => {
    return (
        <header className={style.banner}>
            <img
                src={bannerImage}
                alt="Organo: Pessoas e times organizados em um só lugar!"
            />
        </header>
    )
}

export default Banner