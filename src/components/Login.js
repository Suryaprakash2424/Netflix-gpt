import { useState, useRef } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { adduser } from "../utils/userSlice";
import { USER_AVATAR ,BG_URL } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    // Validation of data
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    if (!isSignInForm) {
      // Sign Up form
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          // console.log(user);
          // navigate("/browse");
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR ,
          })
            .then(() => {
              // Profile updated!
              const {
                uid,
                email,
                displayName,
                photoURL } =auth.currentUser;
              dispatch(adduser({
                uid: uid,
                email: email,
                displayName: displayName,
                photoURL: photoURL
              })
              );
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode + "-" + errorMessage);
        });
    } else {
      // Sign In form
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
          // navigate("/");
        });
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className="w-full"
          src={BG_URL}
          alt="bg"
        />
      </div>
      <div>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="absolute content-center rounded-lg p-12 w-3/12 bg-black bg-opacity-80 my-36 mx-auto left-0 right-0 text-white"
        >
          <h1 className="font-bold text-2xl mx-3 py-2">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input
              type="text"
              ref={name}
              placeholder="Full Name"
              className="p-2 my-2 w-full bg-gray-700  rounded-lg"
            />
          )}
          <input
            type="text"
            ref={email}
            placeholder="Email or Mobile number"
            className="p-2 my-2 w-full bg-gray-700 rounded-lg"
          />
          <input
            type="text"
            ref={password}
            placeholder="Password"
            className="p-2 my-2 w-full bg-gray-700  rounded-lg"
          />
          <p className="text-red-400 font-semibold">{errorMessage}</p>
          <button
            className=" py-1 w-full my-2 border bg-red-500 rounded-lg"
            onClick={handleButtonClick}
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p className=" cursor-pointer " onClick={toggleSignInForm}>
            {isSignInForm
              ? "New to Netflix? Sign up Now"
              : "Already resgistered?. Sign In Now"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
