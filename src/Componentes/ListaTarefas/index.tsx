import { ITarefas } from '../../Types/ITarefas'
import ItemLista from './ItemLista'
import style from './ListaTarefas.module.scss'

interface Props{
    tarefas : ITarefas[]
    excluiTarefa: (tarefa: ITarefas) => void,
    completaTarefa: (tarefa: ITarefas) => void,
    recuperaTarefa: (tarefa: ITarefas) => void
}

export default function ListaTarefas({tarefas, excluiTarefa, completaTarefa, recuperaTarefa} : Props){
        return <>
        <div className={style.listaTarefa}>
            {tarefas.map((tarefa) => (
                <ItemLista tarefa={tarefa} excluiTarefa={excluiTarefa} completaTarefa={completaTarefa} recuperaTarefa={recuperaTarefa}/>
            ))}
        </div>
    </>
}