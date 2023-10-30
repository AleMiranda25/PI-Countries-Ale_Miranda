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
} from "../../components/index.js";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCountries());
  }, []);

  return (
    <div className="homeContainer">
      <NavBar />
      <CountryCardsContainer />
      <Footer />
    </div>
  );
};
export default Home;
