import React, { useState } from 'react';
import PropTypes from 'prop-types';
import myContext from './context';

function Provider({ children }) {
  const [dadosApi, setDadosApi] = useState([]);
  const [nameFilter, setNameFilter] = useState('');
  const [objFilters, setObjectFilters] = useState([]);
  return (
    <myContext.Provider
      value={ {
        dadosApi,
        setDadosApi,
        nameFilter,
        setNameFilter,
        objFilters,
        setObjectFilters,
      } }
    >
      { children }
    </myContext.Provider>
  );
}
Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Provider;
