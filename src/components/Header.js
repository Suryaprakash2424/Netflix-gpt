import { useEffect } from 'react';
import { auth } from '../utils/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { adduser, removeuser } from '../utils/userSlice';
import { LOGO_URL } from '../utils/constants';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // using useselector we subscribe to store
  const user = useSelector(store => store.user);

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


  

  return (
    <div className='absolute w-full bg-gradient-to-b from-black z-20 flex justify-between'>
      <img className='w-48' src={LOGO_URL} alt='logo' />
      {user && (<div
        className='flex'>
        <img className='h-10 px-2 my-7 -mx-5' src={user?.photoURL} alt='usericon' />
        <button className='bg mx-6 text-white font-semibold' onClick={handleSignOut}>Sign Out</button>
      </div>)
      }
    </div>
  )
};

export default Header;