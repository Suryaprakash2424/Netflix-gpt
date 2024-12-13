import { useEffect } from 'react';
import { auth } from '../utils/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { adduser, removeuser } from '../utils/userSlice';
import { LOGO_URL } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice';
import lang, { SUPPORTED_LANGUAGES } from '../utils/languageConstants';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // using useselector we subscribe to store
  const user = useSelector(store => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      // navigate("/");
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    })
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is sign In
        const {
          uid,
          email,
          displayName,
          photoURL } = user;
        dispatch(adduser(
          {
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL
          })
        );
        navigate("/browse");
        // ...
      } else {
        // User is signed out
        dispatch(removeuser());
        navigate("/");
      }
    });
  }, []);

  const handleGptSearchClick = () =>{
    dispatch(toggleGptSearchView());
  }

  const handleLanguageChange = (e) => {
    // console.log(e.target.value);
    dispatch(changeLanguage(e.target.value));
  }


  

  return (
    <div className='absolute w-full bg-gradient-to-b from-black z-20 flex justify-between'>
      <img className='w-48' src={LOGO_URL} alt='logo' />
      {user && (<div
        className='flex p-2'>
        {showGptSearch && <select
          className=' px-4 rounded-lg bg-opacity-40 bg-black text-white my-8 h-8 text-wrap'
          onChange={handleLanguageChange}>
          {SUPPORTED_LANGUAGES.map(lang => <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
        </select>
        }
        <button className=' mx-8 px-4 rounded-lg my-8 h-8 text-wrap bg-red-700' onClick={handleGptSearchClick}>
          {showGptSearch ? "Homepage" : "GPT Search"}
        </button>
        <img className='h-10 px-2 my-7 -mx-5' src={user?.photoURL} alt='usericon' />
        <button className='bg mx-6 text-white font-semibold' onClick={handleSignOut}>Sign Out</button>
      </div>)
      }
    </div>
  )
};

export default Header;