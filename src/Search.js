import React, { useContext, useState } from 'react';
import Filters from './Filters';
import myContext from './helpers/context';

function Search() {
  const { setNameFilter } = useContext(myContext);
  const [termo, setTermo] = useState('');
  return (
    <div>
      <h2>Star Wars</h2>
      <input
        value={ termo }
        type="text"
        placeholder="Digite um termo para buscar"
        data-testid="name-filter"
        onChange={ (e) => {
          setTermo(e.target.value);
          setNameFilter(e.target.value);
        } }
      />
      <Filters />
    </div>
  );
}
export default Search;
