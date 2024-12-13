import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants"
import { useEffect } from "react";
import { addTopRatedMovies } from "../utils/movieSlice";

const useTopRated = () => {
    const dispatch = useDispatch();
    const topRatedMovies = useSelector((store) => store.movies?.addTopRatedMovies);

    const getTopratedMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTIONS);
        const json = await data.json();
        console.log(json);
        dispatch(addTopRatedMovies(json.results));
    }
    
    useEffect(() => {
        getTopratedMovies();
    }, []);

};

export default useTopRated;