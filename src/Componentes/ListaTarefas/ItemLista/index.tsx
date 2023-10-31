import style from './ItemLista.module.scss'
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import UnpublishedIcon from '@mui/icons-material/Unpublished';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { ITarefas } from '../../../Types/ITarefas';
import RestoreIcon from '@mui/icons-material/Restore';

interface Props {
    tarefa: ITarefas
    excluiTarefa: (tarefa: ITarefas) => void,
    completaTarefa: (tarefa: ITarefas) => void,
    recuperaTarefa: (tarefa: ITarefas) => void
}

export default function ItemLista({tarefa, excluiTarefa, completaTarefa, recuperaTarefa}: Props){    

    function formataData(data: string) {
        var [ano, mes, dia] = data.split('-');
        const dataFormatada = `${dia}/${mes}/${ano}`;
        return dataFormatada;
    }

    return <>    
    <table className={style.itemLista}> 
        <tr>
            <th className={style.itemListaTitulo}>Data Final</th>
            <th className={style.itemListaTitulo}>Descrição</th>
        </tr>
        <tr>
            <td>{ formataData(tarefa.data) }</td>
            <td className={style.itemListaTituloDescricao}>{ tarefa.descricao }</td>
            <td onClick={() => completaTarefa(tarefa)}>
            {
                !tarefa.completado ? 
                <UnpublishedIcon/> : 
                <CheckCircleIcon color="primary"/>
            }
            </td>
            {tarefa.excluido ? 
            <td onClick={() => recuperaTarefa(tarefa)}>
                <RestoreIcon></RestoreIcon>
            </td> 
            :
            <td onClick={() => excluiTarefa(tarefa)}>
                <IconButton aria-label="delete" size="small">
                    <DeleteIcon />
                </IconButton>
            </td>
            }
        </tr>
    </table>
    </>
}
