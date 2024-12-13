import { BG_URL } from "../utils/constants";
import GptMovieSuggestion from "./GptMovieSuggestion";
import GptSearchBar from "./GptSearchBar";

const GptSearchPage = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img
          className="w-full"
          src={BG_URL}
          alt="bg"
        />
      </div>
      <GptSearchBar />
      <GptMovieSuggestion/>
    </div>
  )
}

export default GptSearchPage;