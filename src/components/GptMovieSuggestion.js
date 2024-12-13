import MovieList from "./MovieList";
import { useSelector } from "react-redux"

const GptMovieSuggestion = () => {
  
    const { movieResults, movieNames } = useSelector((store) => store.gpt);
    if (!movieNames) return null;

    return (
      <div className="bg-black text-white bg-opacity-90">
            <div>
                {movieNames.map((movieName,index) => (
                    <MovieList
                        key={movieName}
                        title={movieName}
                        movies={movieResults[index]}
                    />
                ))}
        </div>

    </div>
  )
}

export default GptMovieSuggestion