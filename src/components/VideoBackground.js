import {  useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
    const trailervideo = useSelector((store) => store.movies?.TrailerVideo);
    useMovieTrailer(movieId);
    // console.log(trailervideo);

  return (
    <div >
      <iframe
        className="w-screen overflow-hidden aspect-video bg-gradient-to-r from-black"
        src={
          "https://www.youtube.com/embed/" +
          trailervideo?.key +
          "?&autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
      >
      </iframe>
    </div>
  );
};

export default VideoBackground;