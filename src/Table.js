import React, { useContext } from 'react';
import myContext from './helpers/context';

function Table() {
  const context = useContext(myContext);
  const { dadosApi, nameFilter, objFilters } = useContext(myContext);
  // console.log('Conteúdo contexto', context);

  const tableFilterName = (filtradoInput) => filtradoInput
    .filter((planets) => planets.name.toUpperCase()
      .includes(nameFilter.toUpperCase()));

  const tableFilterInputs = () => {
    const filter = objFilters.reduce((acc, item) => acc
      .filter((planeta) => {
        if (item.comparison === 'maior que') {
          return Number(planeta[item.column]) > Number(item.number);
        }
        if (item.comparison === 'menor que') {
          return Number(planeta[item.column]) < Number(item.number);
        }
        if (item.comparison === 'igual a') {
          return Number(planeta[item.column]) === Number(item.number);
        }
        return null;
      }), dadosApi);
    return tableFilterName(filter);
  };

  function renderTable() {
    if (dadosApi) {
      return (
        tableFilterInputs().map((planeta, index) => (
          <tr key={ index }>
            <td>{ planeta.name }</td>
            <td>{ planeta.rotation_period }</td>
            <td>{ planeta.orbital_period }</td>
            <td>{ planeta.diameter }</td>
            <td>{ planeta.climate }</td>
            <td>{ planeta.gravity }</td>
            <td>{ planeta.terrain }</td>
            <td>{ planeta.surface_water }</td>
            <td>{ planeta.population }</td>
            <td>{ planeta.films.map((i) => i)}</td>
            <td>{ planeta.created }</td>
            <td>{ planeta.edited }</td>
            <td>{ planeta.url }</td>
          </tr>
        ))
      );
    }
  }
  return (
    <table className="tabela-geral" border="1">
      <thead>
        <tr>
          <th>Nome</th>
          <th>Tempo de Rotação</th>
          <th>Tempo de órbita</th>
          <th>População</th>
          <th>Clima</th>
          <th>Terreno</th>
          <th>Diâmetro</th>
          <th>Criado em</th>
          <th>Editado em</th>
          <th>Filmes</th>
          <th>Gravidade</th>
          <th>Água</th>
          <th>URL</th>
        </tr>
      </thead>
      <tbody>
        { dadosApi.length !== 0 && renderTable()}
      </tbody>
    </table>
  );
}
export default Table;
