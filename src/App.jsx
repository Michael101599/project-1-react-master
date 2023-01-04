import { useState } from "react";
import { Lat } from "./Components/Lat/Lat";
import { MainContent } from "./Components/MainContent/MainContent";

function App() {

  const [listMovies, setListMovies] = useState([]);

  return (
    <div className="App">
      <div className="layout">
        {/* Cabecera */}
        <header className="header">
          <div className="logo">
            <div className="play"></div>
          </div>
          <h1>Mis Pelis</h1>
        </header>

        {/* Barra de navegación */}
        <nav className="nav">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Movies</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>

        {/* Contenido principal */}
        <section className="content">
          {/* Aquí van las películas */}
          <MainContent listMovies={listMovies} setListMovies={setListMovies} />
        </section>

        {/* Barra lateral */}
        <aside className="lateral">
          <Lat setListMovies={setListMovies} listMovies={listMovies} />
        </aside>

        {/* Pie de página */}
        <footer className="footer">
          &copy; Máster en Javascript ES12 y Typescript -{" "}
          <a href="https://michael101599.github.io/portfolio-michael/">
            portfolio-michael
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
