// import React from "react";
import { useContext } from "react";
import MovieList from "./Cine/MovieList";
import { ThemeContext } from "./Context";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";
const Pages = () => {
  const { darkMood } = useContext(ThemeContext);
  return (
    <div className={`h-full w-full ${darkMood ? "dark" : ""}`}>
      <Header />
      <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <Sidebar></Sidebar>
          <MovieList></MovieList>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Pages;
