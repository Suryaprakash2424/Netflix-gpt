import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ path }) => {
    // console.log(path);
    return (
        <div className="w-36 md:w-48 pr-4">
            <img alt="movie card" src={IMG_CDN_URL + path} />
        </div>
  )
}

export default MovieCard;