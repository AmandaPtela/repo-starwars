const filtrar = (termo, planets, setPlanets) => {
    const filtrado = planets.filter((planet) => planet.name.includes(termo));
    setPlanets(filtrado);
/*   if(termo) {
    const filtrado = planets
    .filter((planet) => planet.name.includes(termo));
    setPlanets(filtrado);
  } */
};
export default filtrar;
