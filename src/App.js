import Banner from "./components/Banner";
import "./App.css";
import "@splidejs/react-splide/css";
import Nav from "./components/Nav";
import MovieCategory from "./components/MovieCategory";
import { LazyLoadComponent } from "react-lazy-load-image-component";

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <LazyLoadComponent>
        <MovieCategory />
      </LazyLoadComponent>
    </div>
  );
}

export default App;
