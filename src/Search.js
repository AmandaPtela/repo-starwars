import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import filtrar from './helpers/functions';

function Search({ planetas }) {
  const [termo, setTermo ] = useState('');
  const [planets, setPlanets ] = useState(planetas);
  return (
    <div>
      <p>Star Wars</p>
      <input
        value={ termo }
        type="text"
        placeholder="Digite um termo para buscar"
        onChange={ (e) => {
          setTermo(e.target.value);
          const filtrado = planetas.filter((planet) => planet.name.includes(termo));
          const tudo = planetas;
          filtrado.length !== 0 ? setPlanets(filtrado) : setPlanets(tudo);
          console.log(planets);}}
      />
      <button type="button">Filtrar</button>
    </div>
  );
}
Search.propTypes = {
  planetas: PropTypes.arrayOf(PropTypes.string).isRequired,
  altDados: PropTypes.func.isRequired,
};
export default Search;
