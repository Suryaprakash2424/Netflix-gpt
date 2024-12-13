import { useSelector } from "react-redux"
import lang from "../utils/languageConstants"

const GptSearchBar = () => {
    const langKey = useSelector((store => store.config.lang));
  return (
      <div className="pt-[20%]">
          <form className="bg-black  rounded-lg ml-64 w-1/2 grid grid-cols-12">
              <input
                  type="text"
                  className=" p-1 m-3 font-semibold text-xl col-span-8"
                  placeholder={lang[langKey].gptSearchPlaceholder} />
              <button className="col-span-4 m-3 rounded-lg text-3xl bg-red-500 p-3  ">
                  { lang[langKey].search }
              </button>
          </form>
      </div>
  )
}

export default GptSearchBar