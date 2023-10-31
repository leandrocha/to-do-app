import style from '../Pages/App.module.scss'
import {  useState } from 'react';
import { ITarefas } from '../Types/ITarefas';
import  Container  from '../Componentes/Container/Index';
import  Header  from '../Componentes/Header/Index';
import Filtros from '../Componentes/Filtros/Index';
import { Alert, AlertColor } from '@mui/material';

function App() {
  const [tarefas, setTarefas] = useState<ITarefas[]>([])
  const [tarefasExcluidas, setTarefasExcluidas] = useState<ITarefas[]>([])
  const [containerAtivo, setContainerAtivo] = useState<string>('NotasAtivas')

  const [childrenAlert, setChildrenAlert] = useState<string>('');
  const [color, setColor] = useState<AlertColor | undefined>("success");
  const [opacity, setOpacity] = useState(0);

  function excluiTarefa(tarefa: ITarefas) {
    setTarefas(tarefasAntigas => tarefasAntigas.filter(tarefaAntiga => tarefaAntiga.id !== tarefa.id));
    setTarefasExcluidas(tarefasAntigas => [...tarefasAntigas, {...tarefa, excluido: true}])
    showAlert('Tarefa excluída com sucesso')
  }

  function excluiTodasTarefas() {
    setTarefasExcluidas([])
    setContainerAtivo('NotasAtivas')
    showAlert('Todas as tarefas foram excluídas')
  }
  
  function recuperaTarefa(tarefa: ITarefas) {
    setTarefasExcluidas(tarefasAntigas => tarefasAntigas.filter(tarefaAntiga => tarefaAntiga.id !== tarefa.id));
    setTarefas(tarefasAntigas => [...tarefasAntigas, {...tarefa, excluido: false}])
    showAlert('Tarefa recuperada com sucesso')
  }

  function completaTarefa(tarefa: ITarefas){   
    var set = containerAtivo === 'NotasAtivas' ?  setTarefas : setTarefasExcluidas
    
    set(tarefasAntigas => tarefasAntigas.map(tarefaAntiga => {
      if(tarefaAntiga.id === tarefa.id)
        return {
        ...tarefaAntiga,
        completado: !tarefaAntiga.completado,
        }
      return tarefaAntiga
      }))

      if(!tarefa.completado)
        showAlert('Tarefa concluída')
  }

  function showAlert(children: string, color?: AlertColor){
    setOpacity(1)
    setColor(color)
    setChildrenAlert(children)
    setTimeout(() => setOpacity(0), 2000)  
  }

  return (
    <div className={style.App}>    
      <Header/>
      
      <Filtros
      showAlert={showAlert} 
      containerAtivo={containerAtivo} 
      setContainerAtivo={setContainerAtivo}
      tarefasExcluidas={tarefasExcluidas}></Filtros>  

      <Container 
      setTarefas={setTarefas} 
      excluiTarefa={excluiTarefa} 
      completaTarefa={completaTarefa}
      recuperaTarefa={recuperaTarefa}
      tarefas={tarefas} 
      tarefasExcluidas={tarefasExcluidas}
      containerAtivo={containerAtivo}
      showAlert={showAlert}
      excluiTodasTarefas={excluiTodasTarefas}></Container>  

      <div className={style.alerts} style={{opacity}}>
        <Alert severity={color}>{ childrenAlert }</Alert>
      </div>
    </div>
  );
}

export default App;
