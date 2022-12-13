import React from "react";
import Logo from "../imgs/logo.svg";
import { AiOutlineSearch } from "react-icons/ai";
import { BsSunFill } from "react-icons/bs";
import MenuToggle from "./MenuToggle";
import AvatarComp from "./Avatar";
import { BsFacebook } from "react-icons/bs";
import { SiTiktok, SiZalo } from "react-icons/si";
import { useAuthContext } from "../hooks/useAuthContext";
import { Spinner } from "flowbite-react";
import { AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import { AnimatePresence, motion, useCycle } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useEffect, useState } from "react";

function Navbar() {
  const userNavItems = [
    { name: "Trang chủ", to: "" },
    { name: "Khoá học", to: "courses" },
    { name: "Blog", to: "blogs" },
    // { name: "About me", to: "about" },
    { name: "Đăng nhập", to: "login" },
    { name: "Đăng ký", to: "signup" },
    { name: "Templates", to: "templates" },
  ];

  const [isOpen, toggleOpen] = useCycle(false, true);
  const [conditionalNavItems, setconditionalNavItems] = useState(userNavItems);

  const { user, authIsReady } = useAuthContext();
  const { logout } = useLogout();

  //log user out
  const handleLogout = () => {
    logout();
  };

  useEffect(() => {
    if (user) {
      if (user.email === "baopowerpoint@gmail.com") {
        const adminNavItems = [
          { name: "DashBoard", to: "/admin" },
          { name: "Bài đăng", to: "/posts-managing" },
          { name: "Users", to: "/users" },
          { name: "Sản phẩm", to: "/products-managing" },
          { name: "Khóa học", to: "/courses-managing" },
        ];
        setconditionalNavItems(adminNavItems);
      } else {
        setconditionalNavItems(
          userNavItems.filter(
            (navItem) => navItem.to !== "login" && navItem.to !== "signup"
          )
        );
      }
    } else {
      setconditionalNavItems(userNavItems);
    }
  }, [user]);
  return (
    <div className="bg-dark  text-light3 box-border">
      {authIsReady && (
        <nav className="flex text-headline5 p-2 text-light3 bg-dark z-50 backdrop-blur-md bg-opacity-10 fixed top-0 left-0 right-0 items-center justify-between">
          <Link to="/">
            <img className="h-[20px]" src={Logo} alt="" />
          </Link>
          <ul className="  h-fit hidden md:flex  gap-5 text-body2 font-500 items-center">
            {conditionalNavItems &&
              conditionalNavItems.map((item, idx) => (
                <li key={idx} className="">
                  <Link onClick={toggleOpen} to={item.to}>
                    {item.name}
                  </Link>
                </li>
              ))}
          </ul>
          <div className="flex items-center gap-2">
            <div className="bg-dark3  p-1 rounded-lg">
              {" "}
              <BsSunFill />
            </div>
            <div className="bg-dark3  p-1 rounded-lg">
              {" "}
              <AiOutlineSearch />
            </div>
            <div>
              {user && (
                <AvatarComp
                  onLogout={handleLogout}
                  displayName={user.displayName}
                  email={user.email}
                  imgUrl={user.photoURL}
                />
              )}
            </div>
            <div className="flex items-center md:hidden">
              <MenuToggle isOpen={isOpen} toggleOpen={toggleOpen} />
            </div>
            <motion.div
              initial={false}
              animate={isOpen ? "open" : "closed"}
              variants={{
                open: (height = 1000) => ({
                  clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
                  opacity: 1,
                  transition: {
                    type: "spring",
                    stiffness: 10,
                    restDelta: 2,
                  },
                }),
                closed: {
                  clipPath: "circle(30px at 200px 0px)",
                  opacity: 0,
                  transition: {
                    type: "spring",
                    stiffness: 200,
                    damping: 40,
                  },
                },
              }}
              className="absolute top-0 bg-dark4 right-0 w-1/2 z-50 h-fit rounded-bl-lg"
            >
              <ul className="mt-10 ml-5 flex flex-col items-start md:hidden gap-5 text-body1 justify-center">
                {conditionalNavItems &&
                  conditionalNavItems.map((item, idx) => (
                    <li key={idx} className="">
                      <Link
                        className="font-600 text-left"
                        onClick={toggleOpen}
                        to={item.to}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}

                <div className="flex flex-wrap justify-start gap-5 text-headline6 mb-6">
                  <a
                    href="https://www.facebook.com/baopowerpoint/"
                    target="_blank"
                    type="button"
                  >
                    <BsFacebook />
                  </a>

                  <a
                    href="https://www.tiktok.com/@baopowerpoint?is_from_webapp=1&sender_device=pc"
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

                  <a
                    href="https://zalo.me/0374661631"
                    target="_blank"
                    type="button"
                  >
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
              </ul>
            </motion.div>
          </div>
        </nav>
      )}
      {/* {!authIsReady && (
        <Spinner
          aria-label="Extra large spinner example"
          className="absolute top-1/2 left-1/2 -m-5 "
          size="xl"
        />
      )} */}
    </div>
  );
}

export default Navbar;
