import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector(store => store.movies);
  console.log(movies);
  return (
    movies.nowPlayingMovies && (
      <div id="sec" className="w-screen bg-black pl-8">
        <div className="-mt-[20%] relative z-50">
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Popular Movies"} movies={movies.PopularMovies}/>
      <MovieList title={"Top Rated"} movies={movies.TopRatedMovies}/>
      <MovieList title={"Upcoming Movies"} movies={movies.UpComingMovies}/> 
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;  