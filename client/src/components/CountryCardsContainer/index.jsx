//Funcionalidad
import { useSelector } from "react-redux";
// Estilos
import "./module.css";
//Componentes
import { CountryCard } from "../index";

export default () => {
  const countries = useSelector((state) => state.countries);

  return (
    <>
      <div>
        <h1 className="textoDeHome">¡Disfruta de los paises del mundo!</h1>
      </div>
      <div className="contenidoDeFiltros"> Aqui irian los filtros </div>
      <div className="mainCard">
        {countries.map((c) => {
          return (
            <CountryCard
              key={c.id}
              id={c.id}
              flagImage={c.flagImage}
              name={c.name}
              continent={c.continent}
              capital={c.capital}
            />
          );
        })}
      </div>
    </>
  );
};
