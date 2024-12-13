import MovieCard from "./MovieCard"

const MovieList = ({ movies, title }) => {
    // console.log(movies   );
    return (
        <div className="px-3 bg-black bg-transparent text-white ">
            <h1 className=" text-lg md:text-3xl py-3">{title}</h1>
            <div className="flex overflow-x-scroll">
                <div className="flex">
                    {movies?.map((movie) => (
                        <MovieCard key={movie.id} path={movie.poster_path} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MovieList;

