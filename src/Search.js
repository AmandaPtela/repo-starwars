import React from 'react';
import { filtrar } from './helpers/functions';
import myContext from './context';

function Search() {
  return (
    <myContext.Consumer>
      {
        (value) =>
        <div>
          <p>Star Wars</p>
          <input
            type="text"
            placeholder="Digite um termo para buscar"
            onChange={ (e) => filtrar(e, value.dadosApiContext)}
          />
          <button></button>
        </div>
    }
    </myContext.Consumer>
  )
}
export default Search;