import { useState } from "react";
import { Link } from "react-router-dom";
import "../index.css";

function Navbar() {
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
              <h1 className="p-2 hover:cursor-pointer hover:border-b-yellow-300 hover:border-b-2 sm:mt-8 sm:ml-0 ml-28 ">
                Home
              </h1>
            </Link>
            <Link to="/projects">
              <h1 className="p-2 hover:cursor-pointer hover:border-b-yellow-300 hover:border-b-2">
                Projects
              </h1>
            </Link>
            <Link to="/about">
              <h1 className="p-2 hover:cursor-pointer hover:border-b-yellow-300 hover:border-b-2">
                About
              </h1>
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
