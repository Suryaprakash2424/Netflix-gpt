import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector(store => store.movies);
  // console.log(movies);
  return (
    movies.nowPlayingMovies && (
      <div id="sec" className=" bg-black pl-8">
        <div className="-mt-[20%] relative z-50">
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Popular Movies"} movies={movies.addPopularMovies}/>
      {/* <MovieList title={"Top Rated"} movies={movies.addTopRatedMovies}/> */}
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>    
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;  