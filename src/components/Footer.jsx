import React from "react";
import { BsFacebook } from "react-icons/bs";
import { SiTiktok, SiZalo } from "react-icons/si";
import { AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import Logo from "../imgs/logo.svg";
import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
function Footer() {
  const { user } = useAuthContext();
  return (
    <footer className="text-center  w-full bg-dark2 mt-20 mx-auto text-light3">
      <div className="container px-6 pt-6 mx-auto">
        <div className="flex justify-center gap-5 text-headline5 mb-6">
          <a
            href="https://www.facebook.com/baopowerpoint/"
            target="_blank"
            type="button"
          >
            <BsFacebook />
          </a>

          <a
            href="https://www.tiktok.com/@baopowerpoint"
            target="_blank"
            type="button"
          >
            <SiTiktok />
          </a>

          <a
            href="https://www.instagram.com/baopowerpoint/"
            target="_blank"
            type="button"
          >
            <AiFillInstagram />
          </a>

          <a href="https://zalo.me/0374661631" target="_blank" type="button">
            <SiZalo />
          </a>

          <a
            href="https://www.youtube.com/channel/UCINA6grcg3VQSh9wF95b6QA"
            target="_blank"
            type="button"
          >
            <AiFillYoutube />
          </a>
        </div>

        <div className="mx-auto">
          <form action="">
            <div className="">
              <div className="">
                <p className="">
                  <strong>Đăng ký nhận thông tin</strong>
                </p>
              </div>

              <div className="flex justify-center gap-2 my-5">
                <input
                  type="text"
                  className="
                  bg-light p-2 rounded-lg"
                  id="exampleFormControlInput1"
                  placeholder="Email"
                />
                <button
                  type="submit"
                  className="bg-primary  px-5 py-2 rounded-lg text-light font-500"
                >
                  Gửi
                </button>
              </div>
            </div>
          </form>
        </div>

        <div className="mb-6">
          <p>iDesim rất vui vì được sự tin tưởng của bạn</p>
        </div>

        <div className="">
          <div className="mb-6">
            <h5 className="uppercase font-700 mb-2.5">Học tập</h5>

            <ul className="list-none mb-0">
              <li>
                <Link to="/courses/design-principles">Nguyên tắc thiết kế</Link>
              </li>
              <li>
                <Link to="/courses/design-principles">Powerpoint</Link>
              </li>
              <li>
                <Link to="/courses/design-principles">Javascript</Link>
              </li>
              <li>
                <Link to="/courses/design-principles">HTML & CSS</Link>
              </li>
            </ul>
          </div>
        </div>
        {!user && (
          <div className="">
            <div className="mb-6">
              <h5 className="uppercase font-700 mb-2.5">Tài Khoản</h5>

              <ul className="list-none mb-0">
                <li>
                  <Link to="" className="text-white">
                    Đăng nhập
                  </Link>
                </li>
                <li>
                  <Link to="" className="text-white">
                    Đăng ký
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        )}
        <div className="">
          <div className="mb-6">
            <h5 className="uppercase font-700 mb-2.5">Thảo luận</h5>

            <ul className="list-none mb-0">
              <li>
                <Link to="/blogs" className="text-white">
                  Blog
                </Link>
              </li>
              <li>
                <a href="#!" className="text-white">
                  Hỗ trợ
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className=" p-4">
        <Link to="/">
          <img className="h-[20px] mx-auto" src={Logo} alt="" />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
