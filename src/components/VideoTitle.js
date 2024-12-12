const VideoTitle = ({ title, overview }) => {
    return (
        <div className="w-screen pt-[15%] bg-gradient-to-r from-black aspect-video px-14 absolute py-3 text-white">
            <h1  className="md:text-4xl font-bold w-2/5">{title}</h1>
            <p className="py-6 text-sm w-1/4">{overview}</p>
            <div className="mt-3 w-2/5">
                <button className="hover:opacity-80 px-11 py-2 rounded-lg font-semibold bg-white text-black ">▶ Play</button>
                <button className="hover:opacity-80 mx-3 px-9  py-2 rounded-lg font-semibold bg-gray-700 text-white">More Info</button>
            </div>
        </div>
    );
};

export default VideoTitle;