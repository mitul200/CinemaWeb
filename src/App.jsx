import { useState } from "react";
import "./App.css";
import MovieList from "./Cine/MovieList";
import { MovieContext } from "./Context";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";

function App() {
  const [cardData, setCardData] = useState([]);
  return (
    <MovieContext.Provider value={{ cardData, setCardData }}>
      <Header></Header>
      <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <Sidebar></Sidebar>
          <MovieList></MovieList>
        </div>
      </main>
      <Footer></Footer>
    </MovieContext.Provider>
  );
}

export default App;
