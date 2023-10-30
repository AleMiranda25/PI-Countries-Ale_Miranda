//
import axios from "axios";
import { Routes, Route } from "react-router-dom";
// Styles
import "./App.css";
// Components
import { Home, LandingPage, Form, About, Detail } from "./views";

axios.defaults.baseURL = "http://localhost:3001";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" Component={LandingPage} />
        <Route path="/home" Component={Home} />
        <Route path="/about" Component={About} />
        <Route path="/detail/:id" Component={Detail} />
        <Route path="/create" Component={Form} />
      </Routes>
    </div>
  );
}

export default App;
