import React, { useContext, useState } from 'react';
import myContext from './helpers/context';

function Filters() {
  const [columnState, setColumState] = useState('population');
  const [comparisonState, setComparisonState] = useState('maior que');
  const [numberState, setNumberState] = useState(0);
  const arrayFilters = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water'];
  const arrayComparison = [
    'maior que',
    'menor que',
    'igual a',
  ];

  const { objFilters, setObjectFilters } = useContext(myContext);

  function filtro() {
    const objColumns = objFilters.map((i) => i.column);
    const objColumnFiltered = arrayFilters.filter((i) => !objColumns.includes(i));
    return (
      objColumnFiltered.map((item) => (
        <option
          id={ item }
          key={ item }
          value={ item }
        >
          { item }
        </option>
      ))
    );
  }
  function handleInput({ target }) {
    if (target.id === 'column-filter') {
      setColumState(target.value);
    }
    if (target.id === 'comparison-filter') {
      setComparisonState(target.value);
    }
    if (target.id === 'value-filter') {
      setNumberState(target.value);
    }
  }

  function handleClick() {
    setObjectFilters(
      [...objFilters, {
        column: columnState,
        comparison: comparisonState,
        number: numberState,
      }],
    );
    setColumState('population');
    setComparisonState('maior que');
    setNumberState(0);
  }
  return (
    <>
      <select
        onChange={ handleInput }
        id="column-filter"
        data-testid="column-filter"
        value={ columnState }
      >
        { filtro() }
      </select>
      <select
        onChange={ handleInput }
        id="comparison-filter"
        data-testid="comparison-filter"
        value={ comparisonState }
      >
        {arrayComparison.map((item) => (
          <option
            id={ item }
            value={ item }
            key={ item }
          >
            { item }
          </option>
        ))}
      </select>
      <input
        onChange={ handleInput }
        id="value-filter"
        data-testid="value-filter"
        value={ numberState }
        type="number"
      />
      <button
        onClick={ handleClick }
        data-testid="button-filter"
        type="button"
      >
        Filtrar
      </button>
    </>
  );
}
export default Filters;
