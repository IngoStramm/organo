import { useEffect, useState } from 'react'
import Banner from './componentes/Banner'
import Formulario from './componentes/Formulario'
import Rodape from './componentes/Rodape'
import Time from './componentes/Time'

const App = () => {

    const [colaboradores, setColaboradores] = useState([])

    const handleNewCollab = colaborador => {
        setColaboradores([...colaboradores, colaborador])
    }
    useEffect(() => {
        // console.log(colaboradores)
    }, [colaboradores])

    const times = [
        {
            nome: 'Programação',
            classname: 'programacao'
        },
        {
            nome: 'Front-End',
            classname: 'frontend'
        },
        {
            nome: 'Data Science',
            classname: 'datascience'
        },
        {
            nome: 'Devops',
            classname: 'devops'
        },
        {
            nome: 'UX e Design',
            classname: 'ux'
        },
        {
            nome: 'Mobile',
            classname: 'mobile'
        },
        {
            nome: 'Inovação e Gestão',
            classname: 'inovacao'
        },
    ]

    const exibeTimes = () => (
        times.map(time => (
            <Time
                nome={time.nome}
                classname={time.classname}
                key={time.classname}
                colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
            />
        ))
    )

    return (
        <div className="App">
            <Banner />
            <Formulario
                newCollabEvt={colaborador => handleNewCollab(colaborador)}
                times={times.map(time => time.nome)}
            />
            {exibeTimes()}
            <Rodape />
        </div>
    )
}

export default App
