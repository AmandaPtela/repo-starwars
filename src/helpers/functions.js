import { useState } from "react";

const filtrar = (e, planets) => {
  const [dadosApi, setDadosApi] = useState([]);
  const termo = e.target.value;
  const filtrado = planets.filter((planet) => planet.name === termo);
  setDadosApi(filtrado);
  return dadosApi;
}

export { filtrar };