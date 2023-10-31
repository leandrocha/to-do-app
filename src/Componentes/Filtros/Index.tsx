/* eslint-disable jsx-a11y/anchor-is-valid */
import { AlertColor } from '@mui/material'
import { ITarefas } from '../../Types/ITarefas'
import style from '../Filtros/Filtros.module.scss'

interface Props {
    containerAtivo: string,
    tarefasExcluidas: ITarefas[]
    showAlert: (children: string, color?: AlertColor) => void
    setContainerAtivo: React.Dispatch<React.SetStateAction<string>>
}

export default function Filtros({ showAlert, containerAtivo, setContainerAtivo, tarefasExcluidas } : Props){    
    return <>
        <div className={`tabs ${style.Filtros}`}>

            <a className={`tab tab-bordered 
            ${containerAtivo === 'NotasExcluidas' && 'tab-active'} 
            ${style.filtrosButton}`} 
            onClick={() => tarefasExcluidas.length > 0 ?
            setContainerAtivo('NotasExcluidas') 
            : 
            showAlert('Nenhuma tarefa ainda foi excluida', "error")}>Tarefas Excluidas</a> 

            <a className={`tab tab-bordered
            ${containerAtivo === 'NotasAtivas' && 'tab-active'} 
            ${style.filtrosButton}`} 
            onClick={() => setContainerAtivo('NotasAtivas')}>Tarefas Ativas</a> 
        </div>
    </>
}