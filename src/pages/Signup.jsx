import React from "react";
import { useState, useEffect } from "react";
import ColoredShadow from "../components/button/ColoredShadow";
import LoadingButton from "../components/button/LoadingButton";
import { HiCheckCircle, HiXCircle } from "react-icons/hi";
import { AiFillExclamationCircle } from "react-icons/ai";
import SpinnerLight from "../components/spinner/SpinnerLight";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";

//auth hooks
import { useSignup } from "../hooks/useSignup";
import { useAuthContext } from "../hooks/useAuthContext";

function Signup() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [displayName, setDisplayName] = useState(null);
  const [repeatedPassword, setRepeatedPassword] = useState(null);
  const [isShown, setIsShown] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMatched, setIsMatched] = useState(false);
  const [isEmailAvailable, setIsEmailAvailable] = useState(false);
  const [isDisplayNameAvailable, setIsDisplayNameAvailable] = useState(false);
  const [isPasswordAvailable, setIsPasswordAvailable] = useState(false);
  const { signup, error, isPending } = useSignup();
  const { user } = useAuthContext();
  const handleSignup = (e) => {
    e.preventDefault();
    signup(email, password, displayName);
  };
  useEffect(() => {
    if (email && email.includes("@gmail.com")) {
      setIsEmailAvailable(true);
    } else {
      setIsEmailAvailable(false);
    }
  }, [email]);
  useEffect(() => {
    if (displayName && displayName.length >= 3) {
      setIsDisplayNameAvailable(true);
    } else {
      if (displayName && displayName.length > 0) {
        setIsDisplayNameAvailable(false);
      }
    }
  }, [displayName]);

  useEffect(() => {
    if (password && repeatedPassword) {
      if (password == repeatedPassword) {
        setIsMatched(true);
      } else {
        setIsMatched(false);
      }
    }
  }, [repeatedPassword, password]);
  useEffect(() => {
    if (password && password.length >= 6) {
      setIsPasswordAvailable(true);
    } else {
      setIsPasswordAvailable(false);
    }
  }, [password, repeatedPassword]);

  return (
    <div>
      {user && <Navigate to="/" replace={true} />}
      {!user && (
        <div>
          <h1 className="mt-20 text-center text-headline4 font-700">????ng k??</h1>
          <div className=" ">
            <div className="min-w-[350px] md:flex md:items-center mx-auto max-w-[600px]">
              <div className="basis-2/3 w-5/6 mx-auto ">
                <form onSubmit={handleSignup}>
                  <div className="mx-auto mt-5 ">
                    <label className="text-caption ">User Name</label>
                    <div className="relative">
                      <input
                        className="block border-b-[1px] text-body2 bg-dark py-1 w-full border-dark4 placeholder:text-caption2 rounded-lg"
                        type="text"
                        placeholder="H??? v?? t??n"
                        onChange={(e) => {
                          setDisplayName(e.target.value);
                        }}
                      />
                      {isDisplayNameAvailable && (
                        <HiCheckCircle className="absolute top-1/2 -translate-y-1/2  right-0 text-primary" />
                      )}
                      {!isDisplayNameAvailable && !displayName == "" && (
                        <HiXCircle className="absolute top-1/2 -translate-y-1/2  right-0 text-red-400" />
                      )}
                    </div>
                    {!isDisplayNameAvailable && !displayName == "" && (
                      <p className="text-caption  text-right text-red-400">
                        ??t nh???t 3 k?? t???
                      </p>
                    )}
                  </div>
                  <div className="mx-auto mt-3 ">
                    <label className="text-caption ">Email</label>
                    <div className="relative">
                      <input
                        className="block border-b-[1px] bg-dark py-1 text-body2 w-full border-dark4 placeholder:text-caption2 rounded-lg"
                        type="text"
                        placeholder="Nh???p email"
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                      />
                      {isEmailAvailable && (
                        <HiCheckCircle className="absolute top-1/2 -translate-y-1/2  right-0 text-primary" />
                      )}
                      {!isEmailAvailable && !email == "" && (
                        <HiXCircle className="absolute top-1/2 -translate-y-1/2  right-0 text-red-400" />
                      )}
                    </div>
                    {!isEmailAvailable && !email == "" && (
                      <p className="text-caption  text-right text-red-400">
                        Ch??a ????ng ?????nh d???ng email
                      </p>
                    )}
                  </div>
                  <div className="mx-auto  mt-3">
                    <label className="text-caption ">M???t kh???u</label>
                    <div className="relative">
                      <input
                        className="block border-b-[1px] bg-dark text-body2 py-1 w-full border-dark4 placeholder:text-caption2 rounded-lg"
                        type={`${isShown ? "text" : "password"}`}
                        placeholder="M???t kh???u"
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                      />
                      <div
                        onClick={() => {
                          setIsShown(!isShown);
                        }}
                        className="absolute text-[10px] cursor-pointer top-1/2 -translate-y-1/2  right-5"
                      >
                        {isShown ? "???n" : "Hi???n"}
                      </div>
                      {isMatched && isPasswordAvailable && (
                        <HiCheckCircle className="absolute top-1/2  -translate-y-1/2 right-0  text-primary" />
                      )}
                      {!isMatched && !repeatedPassword == "" && (
                        <HiXCircle className="absolute top-1/2  -translate-y-1/2 right-0  text-red-400" />
                      )}
                      {!isPasswordAvailable && !password == "" && (
                        <HiXCircle className="absolute top-1/2  -translate-y-1/2 right-0  text-red-400" />
                      )}
                    </div>
                    {!isPasswordAvailable && !password == "" && (
                      <p className="text-caption  text-right text-red-400">
                        T???i thi???u 6 k?? t???
                      </p>
                    )}
                  </div>
                  <div className="mx-auto  mt-3">
                    <label className="text-caption ">Nh???p l???i m???t kh???u</label>
                    <div className="relative">
                      <input
                        className="block border-b-[1px] text-body2 bg-dark py-1 w-full border-dark4 placeholder:text-caption2 rounded-lg"
                        type={`${isShown ? "text" : "password"}`}
                        autoComplete="on"
                        placeholder="Nh???p l???i m???t kh???u"
                        onChange={(e) => {
                          setRepeatedPassword(e.target.value);
                        }}
                      />

                      {isMatched && (
                        <HiCheckCircle className="absolute top-1/2  -translate-y-1/2 right-0  text-primary" />
                      )}
                      {!isMatched && !repeatedPassword == "" && (
                        <HiXCircle className="absolute top-1/2  -translate-y-1/2 right-0  text-red-400" />
                      )}
                    </div>
                    {!isMatched && !repeatedPassword == "" && (
                      <p className="text-caption  text-right text-red-400">
                        Kh??ng kh???p
                      </p>
                    )}
                  </div>

                  <div className="mx-auto  mt-3">
                    {error && (
                      <div className="flex items-center gap-2 text-red-400">
                        <AiFillExclamationCircle />
                        <p className="text-body2">
                          {error.includes("in-use") && "T??i kho???n ???? t???n t???i"}
                        </p>
                      </div>
                    )}
                  </div>

                  {!isPending && (
                    <button
                      disabled={
                        !isMatched ||
                        !isDisplayNameAvailable ||
                        !isEmailAvailable ||
                        !isPasswordAvailable
                      }
                      className="text-white w-full bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none  focus:ring-blue-800 shadow-lg shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 disabled:cursor-not-allowed text-center mr-2 mb-2 "
                    >
                      ????ng k??
                    </button>
                  )}
                  {isPending && <LoadingButton />}
                  <div className="mx-auto  mt-3">
                    <Link
                      to="/login"
                      className="block mx-auto text-med font-600 text-center text-caption"
                    >
                      ???? c?? t??i kho???n? ????ng nh???p
                    </Link>
                  </div>
                </form>
              </div>
              <div className="w-[300px] hidden md:block">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/idesim-client.appspot.com/o/thumbnails%2Fasset_for_web%2FsignupIllustration.png?alt=media&token=2c9bcda7-9ea1-4015-af74-5d077e58923b"
                  className={`${isLoaded ? "" : "hidden"}`}
                  onLoad={() => {
                    setIsLoaded(true);
                  }}
                  alt=""
                />

                {!isLoaded && (
                  <div className="flex justify-center">
                    <SpinnerLight />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Signup;
