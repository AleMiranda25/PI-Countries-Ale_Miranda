// Funcionalidad
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCountries, getActivities } from "../../redux/actions";
// Estilos
import "./module.css";
// Componentes
import {
  CountryCardsContainer,
  NavBar,
  Footer,
} from "../../components/index.js";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCountries());
    dispatch(getActivities());
  }, []);

  return (
    <div className="homeContainer">
      <NavBar />
      <div>
        <h1 className="textoDeHome">¡Disfruta de los paises del mundo!</h1>
      </div>
      <CountryCardsContainer />
      <Footer />
    </div>
  );
};
export default Home;
