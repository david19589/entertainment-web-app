import Logo from "/src/assets/logo.svg";
import AvatarPng from "/src/assets/image-avatar.png";
import clsx from "clsx";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Header(props: {
  showAvatar: boolean;
  setShowAvatar: (status: boolean) => void;
}) {
  const navigate = useNavigate();

  const location = useLocation();
  const currentPath = location.pathname;

  const [avatarClick, setAvatarClick] = useState(false);

  useEffect(() => {
    const storedEmail = localStorage.getItem("user_email");
    const storedPassword = localStorage.getItem("user_password");

    if (storedEmail && storedPassword) {
      props.setShowAvatar(true);
    } else {
      props.setShowAvatar(false);
    }
  }, [props]);

  const handleSignOut = () => {
    if (avatarClick) {
      props.setShowAvatar(false);
      setAvatarClick(false);
      navigate("/log-in");
    }
  };

  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={clsx(
        scrolled && "top-[-1rem] shadow-xl",
        "lg:px-[2.3rem] lg:rounded-2xl lg:relative md:px-[1.5rem] bg-[#161D2F] pt-[1rem] fixed top-0 left-0 right-0 z-10 transition-all duration-500"
      )}
    >
      <div className="lg:flex-col lg:justify-start lg:fixed lg:top-0 lg:bottom-0 lg:left-[1.3rem] lg:py-[4rem] flex items-center justify-between px-[1rem] py-[1.13rem]">
        <img className="lg:mb-[5rem]" src={Logo} alt="Logo" />
        <div className="lg:flex-col lg:gap-[2.5rem] md:gap-[2rem] flex gap-[1.5rem]">
          <Link to="/">
            <svg
              className="cursor-pointer group"
              width="20"
              height="20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className={clsx(
                  currentPath === "/"
                    ? "fill-[#FFF]"
                    : "group-hover:fill-[#FC4747] group-transition-all duration-200"
                )}
                d="M8 0H1C.4 0 0 .4 0 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1Zm0 11H1c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1ZM19 0h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1Zm0 11h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1Z"
                fill="#5A698F"
              />
            </svg>
          </Link>
          <Link to="/movies">
            <svg
              className="cursor-pointer group"
              width="20"
              height="20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className={clsx(
                  currentPath === "/movies"
                    ? "fill-[#FFF]"
                    : "group-hover:fill-[#FC4747] group-transition-all duration-200"
                )}
                d="M16.956 0H3.044A3.044 3.044 0 0 0 0 3.044v13.912A3.044 3.044 0 0 0 3.044 20h13.912A3.044 3.044 0 0 0 20 16.956V3.044A3.044 3.044 0 0 0 16.956 0ZM4 9H2V7h2v2Zm-2 2h2v2H2v-2Zm16-2h-2V7h2v2Zm-2 2h2v2h-2v-2Zm2-8.26V4h-2V2h1.26a.74.74 0 0 1 .74.74ZM2.74 2H4v2H2V2.74A.74.74 0 0 1 2.74 2ZM2 17.26V16h2v2H2.74a.74.74 0 0 1-.74-.74Zm16 0a.74.74 0 0 1-.74.74H16v-2h2v1.26Z"
                fill="#5A698F"
              />
            </svg>
          </Link>
          <Link to="/tv-series">
            <svg
              className="cursor-pointer group"
              width="20"
              height="20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className={clsx(
                  currentPath === "/tv-series"
                    ? "fill-[#FFF]"
                    : "group-hover:fill-[#FC4747] group-transition-all duration-200"
                )}
                d="M20 4.481H9.08l2.7-3.278L10.22 0 7 3.909 3.78.029 2.22 1.203l2.7 3.278H0V20h20V4.481Zm-8 13.58H2V6.42h10v11.64Zm5-3.88h-2v-1.94h2v1.94Zm0-3.88h-2V8.36h2v1.94Z"
                fill="#5A698F"
              />
            </svg>
          </Link>
          <Link to="/bookmarks">
            <svg
              className="cursor-pointer group"
              width="17"
              height="20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className={clsx(
                  currentPath === "/bookmarks"
                    ? "fill-[#FFF]"
                    : "group-hover:fill-[#FC4747] group-transition-all duration-200"
                )}
                d="M15.387 0c.202 0 .396.04.581.119.291.115.522.295.694.542.172.247.258.52.258.82v17.038c0 .3-.086.573-.258.82a1.49 1.49 0 0 1-.694.542 1.49 1.49 0 0 1-.581.106c-.423 0-.79-.141-1.098-.423L8.46 13.959l-5.83 5.605c-.317.29-.682.436-1.097.436-.202 0-.396-.04-.581-.119a1.49 1.49 0 0 1-.694-.542A1.402 1.402 0 0 1 0 18.52V1.481c0-.3.086-.573.258-.82A1.49 1.49 0 0 1 .952.119C1.137.039 1.33 0 1.533 0h13.854Z"
                fill="#5A698F"
              />
            </svg>
          </Link>
        </div>

        {props.showAvatar ? (
          <img
            onClick={() => {
              setAvatarClick(!avatarClick);
            }}
            className="lg:absolute lg:bottom-[4rem] lg:w-[2.5rem] md:w-[2rem] w-[1.5rem] cursor-pointer"
            src={AvatarPng}
            alt="AvatarPng"
          />
        ) : (
          <Link to="/log-in">
            <h2 className="lg:absolute lg:bottom-[4rem] lg:start-2 text-[#FFF]">
              Log in
            </h2>
          </Link>
        )}
        {avatarClick && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            onClick={handleSignOut}
            className="absolute bottom-[7rem] bg-[#16223f] p-[0.4rem] cursor-pointer"
          >
            <h3 className="text-[#FFF] text-[0.9rem] w-max">Sign out</h3>
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default Header;
