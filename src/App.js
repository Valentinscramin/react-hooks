import React, {useState, useEffect, useMemo, useCallback} from 'react';

function App() {

  const [tarefas, setTarefas] = useState([]);

  const [input, setInput] = useState('');

  useEffect(() =>{

    const tarefaStorage =  localStorage.getItem("tarefas");

    if(tarefaStorage){
      setTarefas(JSON.parse(tarefaStorage));
    }

  },[]);

  useEffect(() => {
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
  }, [tarefas])

  const HandleAdd = useCallback(() =>{
   setTarefas([...tarefas, input]);
   setInput('');
  }, [input, tarefas]);

  const totalTarefas = useMemo(() => tarefas.length, [tarefas]);

  return (
    <div >
      <ul>
        {tarefas.map(tarefa => (
          <li key={tarefa}>{tarefa}</li>
        ))}
      </ul>
      <br/>
      <strong>Você tem {totalTarefas} tarefas !</strong>
      <br/>
      <input type="text" value={input} onChange={event => setInput(event.target.value)}/>
      <button type="button" onClick={HandleAdd}>Adicionar</button>
    </div>
  );

}

export default App;
