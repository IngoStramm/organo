import style from './ListaSuspensa.module.scss'

const ListaSuspensa = ({ label, name, items, firstOptionText = null, selectedOption, onchange }) => {
    const firstOption = firstOptionText ? <option>{firstOptionText}</option> : null;
    const optionsList = items.map(option => (
        <option
            key={option}
            value={option}
        >
            {option}
        </option>
    ))
    return (
        <div className={style.wrapper}>
            <label htmlFor={name}>{label}</label>
            <select
                id={name}
                name={name}
                type='select'
                value={selectedOption}
                onChange={(e) => onchange(e)}
            >
                {firstOption}
                {optionsList}
            </select>
        </div>
    )
}

export default ListaSuspensa