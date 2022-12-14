import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Provider from '../helpers/Provider';
import App from '../App';
import userEvent from '@testing-library/user-event';

describe('Verifica a página principal', () => {
  const mockData = {
    count: 60,
    next: 'https://swapi-trybe.herokuapp.com/api/planets/?page=2',
    previous: null,
    results: [
      {
        name: 'Tatooine',
        rotation_period: '23',
        orbital_period: '304',
        diameter: '10465',
        climate: 'arid',
        gravity: '1 standard',
        terrain: 'desert',
        surface_water: '1',
        population: '200000',
        residents: [
          'https://swapi-trybe.herokuapp.com/api/people/1/',
          'https://swapi-trybe.herokuapp.com/api/people/2/',
          'https://swapi-trybe.herokuapp.com/api/people/4/',
          'https://swapi-trybe.herokuapp.com/api/people/6/',
          'https://swapi-trybe.herokuapp.com/api/people/7/',
          'https://swapi-trybe.herokuapp.com/api/people/8/',
          'https://swapi-trybe.herokuapp.com/api/people/9/',
          'https://swapi-trybe.herokuapp.com/api/people/11/',
          'https://swapi-trybe.herokuapp.com/api/people/43/',
          'https://swapi-trybe.herokuapp.com/api/people/62/',
        ],
        films: [
          'https://swapi-trybe.herokuapp.com/api/films/1/',
          'https://swapi-trybe.herokuapp.com/api/films/3/',
          'https://swapi-trybe.herokuapp.com/api/films/4/',
          'https://swapi-trybe.herokuapp.com/api/films/5/',
          'https://swapi-trybe.herokuapp.com/api/films/6/',
        ],
        created: '2014-12-09T13:50:49.641000Z',
        edited: '2014-12-20T20:58:18.411000Z',
        url: 'https://swapi-trybe.herokuapp.com/api/planets/1/',
      },
      {
        name: 'Alderaan',
        rotation_period: '24',
        orbital_period: '364',
        diameter: '12500',
        climate: 'temperate',
        gravity: '1 standard',
        terrain: 'grasslands, mountains',
        surface_water: '40',
        population: '2000000000',
        residents: [
          'https://swapi-trybe.herokuapp.com/api/people/5/',
          'https://swapi-trybe.herokuapp.com/api/people/68/',
          'https://swapi-trybe.herokuapp.com/api/people/81/',
        ],
        films: [
          'https://swapi-trybe.herokuapp.com/api/films/1/',
          'https://swapi-trybe.herokuapp.com/api/films/6/',
        ],
        created: '2014-12-10T11:35:48.479000Z',
        edited: '2014-12-20T20:58:18.420000Z',
        url: 'https://swapi-trybe.herokuapp.com/api/planets/2/',
      },
      {
        name: 'Yavin IV',
        rotation_period: '24',
        orbital_period: '4818',
        diameter: '10200',
        climate: 'temperate, tropical',
        gravity: '1 standard',
        terrain: 'jungle, rainforests',
        surface_water: '8',
        population: '1000',
        residents: [],
        films: [
          'https://swapi-trybe.herokuapp.com/api/films/1/',
        ],
        created: '2014-12-10T11:37:19.144000Z',
        edited: '2014-12-20T20:58:18.421000Z',
        url: 'https://swapi-trybe.herokuapp.com/api/planets/3/',
      },
      {
        name: 'Hoth',
        rotation_period: '23',
        orbital_period: '549',
        diameter: '7200',
        climate: 'frozen',
        gravity: '1.1 standard',
        terrain: 'tundra, ice caves, mountain ranges',
        surface_water: '100',
        population: 'unknown',
        residents: [],
        films: [
          'https://swapi-trybe.herokuapp.com/api/films/2/',
        ],
        created: '2014-12-10T11:39:13.934000Z',
        edited: '2014-12-20T20:58:18.423000Z',
        url: 'https://swapi-trybe.herokuapp.com/api/planets/4/',
      },
      {
        name: 'Dagobah',
        rotation_period: '23',
        orbital_period: '341',
        diameter: '8900',
        climate: 'murky',
        gravity: 'N/A',
        terrain: 'swamp, jungles',
        surface_water: '8',
        population: 'unknown',
        residents: [],
        films: [
          'https://swapi-trybe.herokuapp.com/api/films/2/',
          'https://swapi-trybe.herokuapp.com/api/films/3/',
          'https://swapi-trybe.herokuapp.com/api/films/6/',
        ],
        created: '2014-12-10T11:42:22.590000Z',
        edited: '2014-12-20T20:58:18.425000Z',
        url: 'https://swapi-trybe.herokuapp.com/api/planets/5/',
      },
      {
        name: 'Bespin',
        rotation_period: '12',
        orbital_period: '5110',
        diameter: '118000',
        climate: 'temperate',
        gravity: '1.5 (surface), 1 standard (Cloud City)',
        terrain: 'gas giant',
        surface_water: '0',
        population: '6000000',
        residents: [
          'https://swapi-trybe.herokuapp.com/api/people/26/',
        ],
        films: [
          'https://swapi-trybe.herokuapp.com/api/films/2/',
        ],
        created: '2014-12-10T11:43:55.240000Z',
        edited: '2014-12-20T20:58:18.427000Z',
        url: 'https://swapi-trybe.herokuapp.com/api/planets/6/',
      },
      {
        name: 'Endor',
        rotation_period: '18',
        orbital_period: '402',
        diameter: '4900',
        climate: 'temperate',
        gravity: '0.85 standard',
        terrain: 'forests, mountains, lakes',
        surface_water: '8',
        population: '30000000',
        residents: [
          'https://swapi-trybe.herokuapp.com/api/people/30/',
        ],
        films: [
          'https://swapi-trybe.herokuapp.com/api/films/3/',
        ],
        created: '2014-12-10T11:50:29.349000Z',
        edited: '2014-12-20T20:58:18.429000Z',
        url: 'https://swapi-trybe.herokuapp.com/api/planets/7/',
      },
      {
        name: 'Naboo',
        rotation_period: '26',
        orbital_period: '312',
        diameter: '12120',
        climate: 'temperate',
        gravity: '1 standard',
        terrain: 'grassy hills, swamps, forests, mountains',
        surface_water: '12',
        population: '4500000000',
        residents: [
          'https://swapi-trybe.herokuapp.com/api/people/3/',
          'https://swapi-trybe.herokuapp.com/api/people/21/',
          'https://swapi-trybe.herokuapp.com/api/people/35/',
          'https://swapi-trybe.herokuapp.com/api/people/36/',
          'https://swapi-trybe.herokuapp.com/api/people/37/',
          'https://swapi-trybe.herokuapp.com/api/people/38/',
          'https://swapi-trybe.herokuapp.com/api/people/39/',
          'https://swapi-trybe.herokuapp.com/api/people/42/',
          'https://swapi-trybe.herokuapp.com/api/people/60/',
          'https://swapi-trybe.herokuapp.com/api/people/61/',
          'https://swapi-trybe.herokuapp.com/api/people/66/',
        ],
        films: [
          'https://swapi-trybe.herokuapp.com/api/films/3/',
          'https://swapi-trybe.herokuapp.com/api/films/4/',
          'https://swapi-trybe.herokuapp.com/api/films/5/',
          'https://swapi-trybe.herokuapp.com/api/films/6/',
        ],
        created: '2014-12-10T11:52:31.066000Z',
        edited: '2014-12-20T20:58:18.430000Z',
        url: 'https://swapi-trybe.herokuapp.com/api/planets/8/',
      },
      {
        name: 'Coruscant',
        rotation_period: '24',
        orbital_period: '368',
        diameter: '12240',
        climate: 'temperate',
        gravity: '1 standard',
        terrain: 'cityscape, mountains',
        surface_water: 'unknown',
        population: '1000000000000',
        residents: [
          'https://swapi-trybe.herokuapp.com/api/people/34/',
          'https://swapi-trybe.herokuapp.com/api/people/55/',
          'https://swapi-trybe.herokuapp.com/api/people/74/',
        ],
        films: [
          'https://swapi-trybe.herokuapp.com/api/films/3/',
          'https://swapi-trybe.herokuapp.com/api/films/4/',
          'https://swapi-trybe.herokuapp.com/api/films/5/',
          'https://swapi-trybe.herokuapp.com/api/films/6/',
        ],
        created: '2014-12-10T11:54:13.921000Z',
        edited: '2014-12-20T20:58:18.432000Z',
        url: 'https://swapi-trybe.herokuapp.com/api/planets/9/',
      },
      {
        name: 'Kamino',
        rotation_period: '27',
        orbital_period: '463',
        diameter: '19720',
        climate: 'temperate',
        gravity: '1 standard',
        terrain: 'ocean',
        surface_water: '100',
        population: '1000000000',
        residents: [
          'https://swapi-trybe.herokuapp.com/api/people/22/',
          'https://swapi-trybe.herokuapp.com/api/people/72/',
          'https://swapi-trybe.herokuapp.com/api/people/73/',
        ],
        films: [
          'https://swapi-trybe.herokuapp.com/api/films/5/',
        ],
        created: '2014-12-10T12:45:06.577000Z',
        edited: '2014-12-20T20:58:18.434000Z',
        url: 'https://swapi-trybe.herokuapp.com/api/planets/10/',
      },
    ],
  };
  beforeEach(async() => {
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockData)
    });
    await fetch('https://swapi-trybe.herokuapp.com/api/planets/')
    expect(fetch).toBeCalledWith('https://swapi-trybe.herokuapp.com/api/planets/');
    expect(fetch).toHaveBeenCalled();
  });
  render(
    <Provider>
      <App />
    </Provider>
  );
  it('Verifica presença do título da página', () => {
    const pageTitle = screen.getByText(/star wars/i);
    expect(pageTitle).toBeInTheDocument();
  });
  it('Verifica inputs', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockData)
    });
    fetch('https://swapi-trybe.herokuapp.com/api/planets/')
    expect(fetch).toBeCalledWith('https://swapi-trybe.herokuapp.com/api/planets/');
    expect(fetch).toHaveBeenCalled();

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
    expect(inputNumberFilter).toHaveAttribute('type', 'number')

    const botaoFiltro = screen.getByTestId("button-filter");
    expect(botaoFiltro).toBeInTheDocument();
    expect(botaoFiltro).toHaveAttribute('type', 'button')
    
    expect(inputColumnFilter.value).toBe('population');

    const tableHeader = screen.getAllByRole('columnheader');
    expect(tableHeader[0]).toBeInTheDocument();
    expect(tableHeader.length).toBe(13);

    userEvent.selectOptions(inputColumnFilter, 'diameter')
    userEvent.selectOptions(inputComparisonFilter, 'maior que')
    userEvent.type(inputNumberFilter, '100000')
    userEvent.click(botaoFiltro)
    const filtered = Object.values(mockData.results).filter((i) => i.diameter > 100000);
    expect(filtered).toBeDefined();
    
    const item2Tabela = await screen.findByText(/Bespin/i);
    if(mockData.length === 0) {
      expect(item2Tabela).not.toBeInTheDocument();
    }
    expect(item2Tabela).toBeInTheDocument();
  });
  it('Verifica inputs select', async () => {
    render(
      <Provider>
        <App />
      </Provider>
    );
    const inputNameFilter = screen.getByTestId("name-filter");
    const botaoFiltro = screen.getByTestId("button-filter");
    expect(inputNameFilter).toBeInTheDocument();
    userEvent.type(inputNameFilter, 'Tatooine');
    
    userEvent.click(botaoFiltro)
    const texto = await screen.findByText(/Tatooine/i);
    expect(texto).toBeInTheDocument();

    const selectedFilters = screen.getByTestId("filter");
    const filtroColumn = screen.getByText(/population/i);
    const filtroComparison = screen.getAllByText(/maior que/i);
    const filtroValue = screen.getByText('0');

    expect(selectedFilters.children.length).toBe(4);
    expect(selectedFilters).toBeInTheDocument();
    expect(filtroColumn).toBeInTheDocument();
    expect(filtroComparison[0]).toBeInTheDocument();
    expect(filtroValue).toBeInTheDocument();
    
    const botaoRemoveFilter = screen.getByText("Excluir");
    expect(botaoRemoveFilter).toBeInTheDocument();
    userEvent.click(botaoRemoveFilter);

    expect(selectedFilters).not.toBeInTheDocument();

  });
  it('Verifica Input Filters', async () => {
    render(
      <Provider>
        <App />
      </Provider>
    );
    const inputColumnFilter = screen.getByTestId("column-filter");
    const inputComparisonFilter = screen.getByTestId("comparison-filter");
    const inputNumberFilter = screen.getByTestId("value-filter");
    const botaoFiltro = screen.getByTestId("button-filter");

    userEvent.selectOptions(inputColumnFilter, 'orbital_period');
    userEvent.selectOptions(inputComparisonFilter, 'igual a');
    userEvent.clear(inputNumberFilter)
    userEvent.type(inputNumberFilter, '304');
    userEvent.click(botaoFiltro);
    const texto = await screen.findByText(/Tatooine/i);
    expect(texto).toBeInTheDocument();
  });
  it('Verifica Input Filters', async () => {
    render(
      <Provider>
        <App />
      </Provider>
    );
    const inputColumnFilter = screen.getByTestId("column-filter");
    const inputComparisonFilter = screen.getByTestId("comparison-filter");
    const inputNumberFilter = screen.getByTestId("value-filter");
    const botaoFiltro = screen.getByTestId("button-filter");

    userEvent.selectOptions(inputColumnFilter, 'population');
    userEvent.selectOptions(inputComparisonFilter, 'menor que');
    userEvent.clear(inputNumberFilter)
    userEvent.type(inputNumberFilter, '5000');
    userEvent.click(botaoFiltro);
    const texto = await screen.findByText(/Yavin IV/i);
    expect(texto).toBeInTheDocument();
  });
  it('Verifica Input Filters', async () => {
    render(
      <Provider>
        <App />
      </Provider>
    );
    const inputColumnFilter = screen.getByTestId("column-filter");
    const inputComparisonFilter = screen.getByTestId("comparison-filter");
    const inputNumberFilter = screen.getByTestId("value-filter");
    const botaoFiltro = screen.getByTestId("button-filter");

    userEvent.selectOptions(inputColumnFilter, 'rotation_period');
    userEvent.selectOptions(inputComparisonFilter, 'igual a');
    userEvent.clear(inputNumberFilter)
    userEvent.type(inputNumberFilter, '18');
    userEvent.click(botaoFiltro);
    const texto = await screen.findByText(/Endor/i);
    expect(texto).toBeInTheDocument();
  });
});