// Funcionalidad
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCountries } from "../../redux/actions";
// Estilos
import "./module.css";
// Componentes
import {
  CountryCardsContainer,
  NavBar,
  Footer,
  Filters,
} from "../../components/index.js";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCountries());
  }, []);

  return (
    <div className="homeContainer">
      <NavBar />
      <div>
        <h1 className="textoDeHome">¡Disfruta de los paises del mundo!</h1>
      </div>
      <Filters />
      <CountryCardsContainer />
      <Footer />
    </div>
  );
};
export default Home;
