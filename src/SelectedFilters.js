import React, { useContext } from 'react';
import myContext from './helpers/context';

function SelectedFilters() {
  const { objFilters, setObjectFilters } = useContext(myContext);

  function deletFilter(column) {
    const newFilter = objFilters.filter((i) => i.column !== column);
    setObjectFilters(newFilter);
  }
  const renderF = objFilters.map((item) => (
    <div key={ item.number } data-testid="filter">
      <p>{ item.column }</p>
      <p>{ item.comparison }</p>
      <p>{ item.number }</p>
      <button
        type="button"
        onClick={ () => deletFilter(item.column) }
      >
        Excluir
      </button>
    </div>));
  return (
    <div>
      { renderF }
      <button
        type="button"
        data-testid="button-remove-filters"
        onClick={ () => setObjectFilters([]) }
      >
        Excluir filtros
      </button>
    </div>
  );
}
export default SelectedFilters;
