/* eslint-disable react/prop-types */
// import React from "react";
import { useContext, useState } from "react";
import { MovieContext } from "../Context";
import { getImgName } from "../utility/cine-utilitu";
import MovieDetailsModal from "./MovieDetailsModal";
import Reating from "./Reating";

const MovieCard = ({ movie }) => {
  const [showModal, setShowModal] = useState(false);
  const [selecetedMovie, setSelecetedMovie] = useState(null);
  const { cardData, setCardData } = useContext(MovieContext);

  const handelAddToCart = (event, movie) => {
    event.stopPropagation();
    const found = cardData.find((item) => {
      return item.id === movie.id;
    });
    if (!found) {
      setCardData([...cardData, movie]);
    } else {
      console.err(`the movie ${movie.title} is already exiest`);
    }
  };

  const handelModalClose = () => {
    setSelecetedMovie(null);
    setShowModal(false);
  };

  const handelMovieSelecetion = (movie) => {
    setSelecetedMovie(movie);
    setShowModal(true);
  };
  return (
    <>
      {showModal && (
        <MovieDetailsModal movie={selecetedMovie} onClose={handelModalClose} />
      )}
      <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
        <a href="#" onClick={() => handelMovieSelecetion(movie)}>
          <img
            className="w-full object-cover"
            src={getImgName(movie.cover)}
            alt={movie.title}
          />
          <figcaption className="pt-4">
            <h3 className="text-xl mb-1">{movie.title}</h3>
            <p className="text-[#575A6E] text-sm mb-2">{movie.genre}</p>
            <div className="flex items-center space-x-1 mb-5">
              <Reating value={movie.rating} />
            </div>
            <a
              className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
              href="#"
              onClick={(e) => handelAddToCart(e, movie)}
            >
              <img src="./assets/tag.svg" alt="" />
              <span>${movie.price} | Add to Cart</span>
            </a>
          </figcaption>
        </a>
      </figure>
    </>
  );
};

export default MovieCard;
