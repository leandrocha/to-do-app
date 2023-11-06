import { AlertColor } from '@mui/material'
import { ITarefas } from '../../Types/ITarefas'
import style from '../Container/Container.module.scss'
import ListaTarefas from '../ListaTarefas'
import Nota from '../Nota'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

interface Props{
    tarefas : ITarefas[],
    tarefasExcluidas: ITarefas[],
    containerAtivo: string
    setTarefas: React.Dispatch<React.SetStateAction<ITarefas[]>>,
    excluiTarefa: (tarefa: ITarefas) => void,
    completaTarefa: (tarefa: ITarefas) => void,
    recuperaTarefa: (tarefa: ITarefas) => void,
    excluiTodasTarefas: () => void,
    showAlert: (children: string, color?: AlertColor) => void
}

export default function Container({setTarefas, excluiTarefa, excluiTodasTarefas, completaTarefa, recuperaTarefa, showAlert, tarefas, containerAtivo, tarefasExcluidas} : Props) {
    return <div className={style.ContainerNotas}>   
        <Nota setTarefas={setTarefas} showAlert={showAlert}/>
        
        {containerAtivo !== 'NotasExcluidas' ? 
        <div className={style.ContainerNotasAtivas}>
            <ListaTarefas tarefas={tarefas} excluiTarefa={excluiTarefa} completaTarefa={completaTarefa} recuperaTarefa={recuperaTarefa}/>
        </div> 
        :
        <div className={style.ContainerNotasExcluidas}>
            <ListaTarefas tarefas={tarefasExcluidas} excluiTarefa={excluiTarefa} completaTarefa={completaTarefa} recuperaTarefa={recuperaTarefa}/>
            <DeleteForeverIcon className={style.ContainerNotasExcluidasButton} onClick={() => excluiTodasTarefas()}/>
        </div>}
    </div>
}