import React from "react";
import { HiCheckCircle, HiXCircle } from "react-icons/hi";
import { AiFillExclamationCircle } from "react-icons/ai";
import SpinnerLight from "../components/spinner/SpinnerLight";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import LoadingButton from "../components/button/LoadingButton";

function Login() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [isEmailAvailable, setIsEmailAvailable] = useState(false);
  const [isShown, setIsShown] = useState(false);
  const [isPasswordAvailable, setIsPasswordAvailable] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  //Auth login
  const { login, error, isPending } = useLogin();
  const location = useLocation();
  //user context
  const { user } = useAuthContext();
  const handleLogin = (e) => {
    e.preventDefault();
    login(email, password);
  };

  //validate login form
  useEffect(() => {
    if (email && email.includes("@gmail.com")) {
      setIsEmailAvailable(true);
    } else {
      setIsEmailAvailable(false);
    }
  }, [email]);
  useEffect(() => {
    if (password && password.length >= 6) {
      setIsPasswordAvailable(true);
    } else {
      setIsPasswordAvailable(false);
    }
  }, [password]);
  return (
    <div>
      {user && (
        <Navigate
          to={location.state ? location.state.from : "/"}
          replace={true}
        />
      )}
      <div>
        <h1 className="mt-20 text-center text-headline4 font-700">Đăng Nhập</h1>
        <div className=" ">
          <div className="min-w-[350px]  md:flex md:items-center mx-auto max-w-[600px]">
            <div className="basis-2/3 w-5/6 mx-auto">
              <form onSubmit={handleLogin}>
                <div className="mx-auto mt-5 ">
                  <label className="text-caption ">Email</label>
                  <div className="relative">
                    <input
                      className="block border-b-[1px] bg-dark py-1 w-full border-dark4 rounded-lg placeholder:text-caption2 focus:outline-none"
                      type="text"
                      placeholder="Nhập email"
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
                      Chưa đúng định dạng email
                    </p>
                  )}
                </div>
                <div className="mx-auto  mt-5">
                  <label className="text-caption ">Mật khẩu</label>
                  <div className="relative">
                    <input
                      className="block border-b-[1px] bg-dark py-1 w-full rounded-lg border-dark4 placeholder:text-caption2 focus:outline-none"
                      type={`${isShown ? "text" : "password"}`}
                      placeholder="Mật khẩu"
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
                      {isShown ? "Ẩn" : "Hiện"}
                    </div>
                    {!isPasswordAvailable && !password == "" && (
                      <HiXCircle className="absolute top-1/2  -translate-y-1/2 right-0  text-red-400" />
                    )}
                    {isPasswordAvailable && (
                      <HiCheckCircle className="absolute top-1/2  -translate-y-1/2 right-0  text-primary" />
                    )}
                  </div>
                  {!isPasswordAvailable && !password == "" && (
                    <p className="text-caption  text-right text-red-400">
                      Tối thiểu 6 ký tự
                    </p>
                  )}
                </div>

                <div className="mx-auto  mt-5">
                  {error && (
                    <div className="flex items-center gap-2 text-red-400">
                      <AiFillExclamationCircle />
                      <p className="text-body2">
                        {error.includes("wrong-password") &&
                          "Sai tên đăng nhập hoặc mật khẩu"}
                      </p>
                    </div>
                  )}
                </div>

                {!isPending && (
                  <button
                    disabled={!isEmailAvailable || !isPasswordAvailable}
                    className="text-white w-full bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none  focus:ring-blue-800 shadow-lg shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 disabled:cursor-not-allowed text-center mr-2 mb-2 "
                  >
                    Đăng Nhập
                  </button>
                )}
                {isPending && <LoadingButton />}
                <div className="mx-auto  mt-5">
                  <Link
                    to="/signup"
                    className="block mx-auto text-med font-600 text-center text-caption"
                  >
                    Chưa có tài khoản? Đăng ký
                  </Link>
                </div>
              </form>
            </div>
            <div className="w-[300px] hidden md:block">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/idesim-client.appspot.com/o/thumbnails%2Fasset_for_web%2FloginIllustration.png?alt=media&token=73e1efb5-5586-46d5-b61a-efb50d0a6a7d"
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
    </div>
  );
}

export default Login;
