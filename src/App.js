import React, { useContext, useEffect } from 'react';
import './App.css';
import Table from './Table';
import Search from './Search';
import myContext from './helpers/context';
import SelectedFilters from './SelectedFilters';

function App() {
  const { setDadosApi } = useContext(myContext);
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
  }, [setDadosApi]);

  return (
    <>
      <Search />
      <SelectedFilters />
      <Table />
    </>
  );
}

export default App;
