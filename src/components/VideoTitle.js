const VideoTitle = ({ title, overview }) => {
    return (
        <div className=" bg-gradient-to-r from-black aspect-video h-auto pt-96 px-10 absolute py-3 z-10 text-white">
            <h1 className="text-5xl font-semibold py-2">{title}</h1>
            <p className="text-left text-lg w-1/3">{overview}</p>
            <div className="mt-3">
                <button className="hover:opacity-80 px-20 py-2 rounded-lg font-semibold bg-white text-black ">▶️ Play</button>
                <button className="hover:opacity-80 mx-3 px-20 py-2 rounded-lg font-semibold bg-gray-700 text-white">More Info</button>
            </div>
        </div>
    );
};

export default VideoTitle;