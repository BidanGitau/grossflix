import Banner from "./components/Banner";
import "./App.css";
import "@splidejs/react-splide/css";
import Nav from "./components/Nav";
import MovieCategory from "./components/MovieCategory";

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <MovieCategory />
    </div>
  );
}

export default App;
