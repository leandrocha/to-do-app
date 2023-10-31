import React, { useState } from 'react';
import { ITarefas } from '../../Types/ITarefas';
import Botao from '../Botao';
import style from './Nota.module.scss';
import { v4 as uuidv4 } from 'uuid'; 
import { AlertColor } from '@mui/material';

interface Props {
    showAlert: (children: string, color?: AlertColor) => void
    setTarefas: React.Dispatch<React.SetStateAction<ITarefas[]>>
}

export default function Nota({setTarefas, showAlert} : Props){
    const [notas, setNotas] = useState(
        {
            data: "00/00/0000",
            descricao: "",
            urgencia: "c",
        }
    )

    function addNota(e : React.MouseEvent){
        e.preventDefault()
        validaNota() &&
        setTarefas(tarefasAntigas => [...tarefasAntigas, 
            {
                ...notas,
                completado: false,
                excluido: false,
                id: uuidv4()
            }])
    }

    function validaNota(): boolean{
        const dataRecebida = new Date(notas.data)
        const dataHoje = new Date()

        if(notas.descricao === ''){
            showAlert('A descrição da nota precisa estar preenchida!', "error")
            return false
        }
        
        if(dataRecebida < dataHoje || notas.data === "00/00/0000"){
            showAlert('Data inválida', "error")
            return false
        }        

        return true
    }

    return <div className={style.notaContainer}>
        <form className={style.nota}>
            <textarea className={style.notaText} placeholder="Digite aqui sua nota" maxLength={255} value={notas.descricao}
            onChange={e => setNotas({...notas, descricao: e.target.value})}></textarea >
            <input className={style.notaData} type="date" value={notas.data} 
            onChange={e => setNotas({...notas, data: e.target.value})}/>
            <select className={style.notaDrop} id="urgencia" value={notas.urgencia} 
            onChange={e => setNotas({...notas, urgencia: e.target.value})}>
                <option value="c">Comum</option>
                <option value="u">Urgente</option>
            </select>
        </form>
        <Botao onClick={addNota} children="Adicionar Nota" />    
    </div>
}