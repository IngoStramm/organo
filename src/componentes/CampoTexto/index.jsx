import style from './CampoTexto.module.scss'

const CampoTexto = ({ label, name, placeholder, required = null, value, onchange }) => {
    return (
        <div className={style.wrapper}>
            <label htmlFor={name}>{label}</label>
            <input
                id={name}
                name={name}
                type='text'
                value={value}
                placeholder={placeholder}
                required={required}
                onChange={(e) => onchange(e)}
            />
        </div>
    )
}

export default CampoTexto