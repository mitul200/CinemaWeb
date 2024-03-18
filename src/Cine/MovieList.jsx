import { getAllMovies } from "../Data/movies";
import MovieCard from "./MovieCard";

const MovieList = () => {
  const movies = getAllMovies();
  console.log(movies);

  return (
    <div>
      <div className="content">
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie}></MovieCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
