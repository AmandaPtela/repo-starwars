import React from 'react';
import { render, screen } from '@testing-library/react';
import Provider from '../helpers/Provider';
import App from '../App';

describe('Verifica a página principal', () => {
  render(
    <Provider>
    <App />
    </Provider>
  );
  it('Verifica presença do título da página', () => {
    const pageTitle = screen.getByText(/star wars/i);
  expect(pageTitle).toBeInTheDocument();

  const table = screen.getAllByRole('columnheader');
  expect(table.length).toBe(13);
  });
  it('Verifica inputs e Tabela', () => {
    render(
      <Provider>
      <App />
      </Provider>
    );
    const inputNameFilter = screen.getByTestId("name-filter");
    expect(inputNameFilter).toBeInTheDocument();

    const inputColumnFilter = screen.getByTestId("column-filter");
    expect(inputColumnFilter).toBeInTheDocument();

    const inputComparisonFilter = screen.getByTestId("comparison-filter");
    expect(inputComparisonFilter).toBeInTheDocument();

    const inputNumberFilter = screen.getByTestId("value-filter");
    expect(inputNumberFilter).toBeInTheDocument();

    const botaoFiltro = screen.getByTestId("button-filter");
    expect(botaoFiltro).toBeInTheDocument();
    
    expect(inputColumnFilter.value).toBe('population');
  });
});
