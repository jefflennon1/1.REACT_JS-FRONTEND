import React, { useState, useEffect } from 'react';

import Header from "./components/Header";
import './components/App.css';
import api from './services/api'

// import backgroundImage from './assets/background.jpg';

// useState retorna um array com 2 posições
// 1. Variável com seu valor inicial.
// 2. Função para atualizarmos esse valor.


function App(){
 
  const [projects, setProjects] = useState([]); 

  useEffect(()=>{
    api.get('projects').then(response=>{
      setProjects(response.data)
    })
  }, []);

  function handleAddProject(){
    // projects.push(`Novo projeto ${Date.now()} `);
    setProjects([... projects, `Novo projeto ${Date.now()} `]);
    console.log(projects);
  }
  return (
    <>
      <Header title="Projects"/>
      {/* <img width={100} src={backgroundImage}></img> */}
      <ul>
       {projects.map(project => <li key={project.id}>{project.title}</li>)}
      </ul>
      <button type="button" onClick={handleAddProject}>Adicionar</button>
    </>
  );
}

export default App;