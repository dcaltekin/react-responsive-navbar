import { useState } from "react";
import { Link } from "react-router-dom";
import "../index.css";
import classNames from "classnames";

function Navbar({ activeTab }) {
  const [active, setActive] = useState(activeTab);
  const [icon, setIcon] = useState(true);
  const handleIcon = () => {
    setIcon(!icon);
  };

  return (
    <div>
      <div className="w-full bg-[#D3D3D3] h-24 fixed left-0 top-0 shadow-xl ">
        <div className="h-full w-full flex flex-row justify-around items-center text-3xl">
          <div className="hover:cursor-pointer">
            <Link to="/">
              <i className="fa-solid fa-blog fa-xl"></i>
            </Link>
          </div>

          <div
            className={
              icon
                ? "sm:hidden flex items-center justify-center"
                : "flex items-center justify-center sm:flex sm:flex-col sm:bg-[#DFE8CC] sm:absolute sm:justify-start sm:items-center sm:-right-full sm:h-screen sm:w-full sm:top-24 sm:z-50 left-0"
            }
          >
            <Link to="/">
              <button
                onClick={() => setActive(0)}
                className={classNames({
                  "p-2 hover:cursor-pointer sm:mt-8 sm:ml-0 ml-2": true,
                  "border-b-2 border-b-yellow-300 bg-gray-400 rounded":
                    active === 0,
                })}
              >
                Home
              </button>
            </Link>
            <Link to="/projects">
              <button
                onClick={() => setActive(1)}
                className={classNames({
                  "p-2 hover:cursor-pointer sm:mt-8 sm:ml-0 ml-2": true,
                  "border-b-2 border-b-yellow-300 bg-gray-400 rounded":
                    active === 1,
                })}
              >
                Projects
              </button>
            </Link>
            <Link to="/about">
              <button
                onClick={() => setActive(2)}
                className={classNames({
                  "p-2 hover:cursor-pointer sm:mt-8 sm:ml-0 ml-2": true,
                  "border-b-2 border-b-yellow-300 bg-gray-400 rounded":
                    active === 2,
                })}
              >
                About
              </button>
            </Link>
          </div>
          <div className="sm:hidden md:block lg:block xl:block">
            <Link to="/">
              <i className="fa-brands fa-github p-2"></i>
            </Link>
            <Link to="/">
              <i className="fa-brands fa-linkedin p-2"></i>
            </Link>
            <Link to="/">
              <i className="fa-brands fa-twitter p-2"></i>
            </Link>
          </div>
          <div
            className="sm:block md:hidden lg:hidden xl:hidden 2xl:hidden"
            onClick={handleIcon}
          >
            <i className={icon ? "fa-solid fa-bars" : "fa-solid fa-xmark"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
