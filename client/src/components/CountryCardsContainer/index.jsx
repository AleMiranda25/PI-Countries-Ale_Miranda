//Funcionalidad
import { useSelector } from "react-redux";
import { useState } from "react";
// Estilos
import "./module.css";
//Componentes
import { CountryCard, Filters, Pagination } from "../index";

export default () => {
  const countries = useSelector((state) => state.filteredCountries);

  const [currentPage, setCurrentPage] = useState(1);
  const countriesPerPage = 10;

  // Obtiene los paises actuales a mostrar
  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  const currentCountries = countries.slice(
    indexOfFirstCountry,
    indexOfLastCountry
  );

  // Cambia de pagina
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <Filters />
      <div className="mainCard">
        {currentCountries.map((c) => {
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
      <Pagination
        countriesPerPage={countriesPerPage}
        totalCountries={countries.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </>
  );
};
