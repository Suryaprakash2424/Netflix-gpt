import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRated from '../hooks/useTopRated';
import { useSelector } from 'react-redux';
import GptSearchPage from './GptSearchPage';

const Broswe = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  useNowPlayingMovies();
  usePopularMovies();
  useTopRated();

  return (
    <div >
      <Header />
      {showGptSearch ?
      (      <GptSearchPage/>
        ) : (
          <><MainContainer />
            <SecondaryContainer />
          </>
      )
    }
    </div>
  );
};

export default Broswe;