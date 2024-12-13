import { useDispatch, useSelector } from "react-redux"
import lang from "../utils/languageConstants"
import { useRef } from "react";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
    const dispatch = useDispatch();
    const langKey = useSelector(store => store.config.lang);
    // console.log(langKey);
    const searchText = useRef(null);
    const searchMovieTMDB = async (movie) => {
        const data = await fetch("https://api.themoviedb.org/3/search/movie?query="
            + movie
        + "&include_adult=false&language=en-US&page=1", API_OPTIONS);
        const json = await data.json();
    }
    
    const handleGptSearchClick = async () => {
        const gptQuery = "Act as a movie recommendation system and suggest some movies for query:"
            + searchText.current.value +
            "only give 5 movie names,comma seperated like given in example,example movies: koi mil gaya, gadar,dhamal,sholay,golmaal";
        const gptResults = await openai.chat.completions.create({
            messages: [{ role: 'user', content: gptQuery }],
            model: 'gpt-3.5-turbo',
        });
        // console.log(gptResults.choices);
        const gptMovies = gptResults.choices?.[0]?.message?.content.split(", ");
        const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
        const tmdbResults = await Promise.all(promiseArray);
        dispatch(addGptMovieResult({movieNames: gptMovies, movieResults: tmdbResults}));
    };

  return (
      <div className="pt-[20%]">
          <form className="bg-black  rounded-lg ml-64 w-1/2 grid grid-cols-12"
          onSubmit={(e)=>e.preventDefault()}>
              <input
                  ref={searchText}
                  type="text"
                  className=" p-1 m-3 font-semibold text-xl col-span-8"
                  placeholder={lang[langKey].gptSearchPlaceholder} />
              <button className="col-span-4 m-3 rounded-lg text-3xl bg-red-500 p-3"
              onClick={handleGptSearchClick}
              >
                  { lang[langKey].search }
              </button>
          </form>
      </div>
  )
}

export default GptSearchBar;