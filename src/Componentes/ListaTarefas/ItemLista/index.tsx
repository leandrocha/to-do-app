import style from './ItemLista.module.scss'
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import UnpublishedIcon from '@mui/icons-material/Unpublished';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { ITarefas } from '../../../Types/ITarefas';
import RestoreIcon from '@mui/icons-material/Restore';
import { useState } from 'react';
import Modals from '../../Modal/Index';
import formataData from '../../../Utils/Formatacao/formataData';
import ArticleIcon from '@mui/icons-material/Article';

interface Props {
    tarefa: ITarefas
    excluiTarefa: (tarefa: ITarefas) => void,
    completaTarefa: (tarefa: ITarefas) => void,
    recuperaTarefa: (tarefa: ITarefas) => void
}

export default function ItemLista({tarefa, excluiTarefa, completaTarefa, recuperaTarefa}: Props){    
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
      setIsModalOpen(!isModalOpen);
    };

    return <>    
        <div className={style.item}> 
            <p className={style.itemTitulo}>Data Final</p>
            <p className={`${style.itemTitulo} ${style.itemTituloDescricao}`}>Descrição</p>

            <p className={style.itemData}>{ formataData(tarefa.data) }</p>
            <p className={style.itemDescricao}>{ tarefa.descricao }</p>
            <ArticleIcon onClick={openModal} className={style.itemBotao}/>
            <p onClick={() => completaTarefa(tarefa)} className={style.itemBotao}>
            {
                !tarefa.completado ? 
                <UnpublishedIcon/> : 
                <CheckCircleIcon color="primary"/>
            }
            </p>
            {tarefa.excluido ? 
            <p onClick={() => recuperaTarefa(tarefa)} className={style.itemBotao}>
                <RestoreIcon/>
            </p> 
            :
            <p onClick={() => excluiTarefa(tarefa)} className={style.itemBotao}>
                <DeleteIcon/>
            </p>
            }
        </div>
        <Modals isModalOpen={isModalOpen} openModal={openModal} tarefa={tarefa}/>
    </>
}
