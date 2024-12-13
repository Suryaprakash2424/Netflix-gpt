import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import {addUpComingMovies} from "../utils/movieSlice";

const useUpComingMovies = () => {
    const dispatch = useDispatch();
    const upcoming = useSelector((store) => store.movies?.UpComingMovies);
    console.log(upcoming);

    const getUpComingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_OPTIONS);
        const json = await data.json();
        console.log(json.results);

        dispatch(addUpComingMovies(json.results));
    };

    useEffect(() => {
        !upcoming &&
            getUpComingMovies();
    }, []);
};

export default useUpComingMovies;