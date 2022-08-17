import React from 'react';
import myContext from './context';
import './Table.css';

function Table() {
  return (
    <myContext.Consumer>
      {
        (value) => (
          <table className="tabela-geral">
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
            <tbody>
              <td>
                { value.dadosApiContext.map((i, ind) => (
                  <tr key={ ind }>{i.name}</tr>
                ))}
              </td>
              <td className="col">
                { value.dadosApiContext.map((i, ind) => (
                  <td key={ ind }>{i.rotation_period}</td>
                )) }
              </td>
              <td className="col">
                { value.dadosApiContext.map((i, ind) => (
                  <td key={ ind }>{i.orbital_period}</td>
                )) }
              </td>
              <td className="col">
                { value.dadosApiContext.map((i, ind) => (
                  <td key={ ind }>{i.population}</td>
                )) }
              </td>
              <td className="col">
                { value.dadosApiContext.map((i, ind) => (
                  <td key={ ind }>{i.climate}</td>
                )) }
              </td>
              <td className="col">
                { value.dadosApiContext.map((i, ind) => (
                  <td key={ ind }>{i.terrain}</td>
                )) }
              </td>
              <td className="col">
                { value.dadosApiContext.map((i, ind) => (
                  <td key={ ind }>{i.diameter}</td>
                )) }
              </td>
              <td className="col">
                { value.dadosApiContext.map((i, ind) => (
                  <td id="table-name" key={ ind }>{i.created}</td>
                )) }
              </td>
              <td className="col">
                { value.dadosApiContext.map((i, ind) => (
                  <td id="table-name2" key={ ind }>{i.edited}</td>
                )) }
              </td>
              <td className="col">
                { value.dadosApiContext.map((i, ind) => (
                  <td id="table-url" key={ ind }>{i.films}</td>
                )) }
              </td>
              <td className="col">
                { value.dadosApiContext.map((i, ind) => (
                  <td key={ ind }>{i.gravity}</td>
                )) }
              </td>
              <td className="col">
                { value.dadosApiContext.map((i, ind) => (
                  <td key={ ind }>{i.surface_water}</td>
                )) }
              </td>
              <td className="col">
                { value.dadosApiContext.map((i, ind) => (
                  <td key={ ind }>{i.url}</td>
                )) }
              </td>
            </tbody>
          </table>
        )
      }
    </myContext.Consumer>
  );
}

export default Table;
