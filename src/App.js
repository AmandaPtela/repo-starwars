import React, { useEffect, useState } from 'react';
import './App.css';
import Table from './Table';
import myContext from './context';
import Search from './Search';

function App() {
  const [dadosApi, setDadosApi] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      const endPoint = 'https://swapi.dev/api/planets';
      await fetch(endPoint)
        .then((Response) => Response.json())
        .then((data) => {
          const dados = Object.values(data.results);
          setDadosApi(dados);
        });
    };
    fetchApi();
  }, []);
  dadosApi.forEach((i) => delete i.residents);
  const valueProvider = {
    dadosApiContext: dadosApi,
  };

  return (
    <myContext.Provider value={ valueProvider }>
      <Search />
      <Table />
    </myContext.Provider>
  );
}

export default App;
