import React from "react";

function Navbar() {
  return (
    <div>
      <div className="w-full bg-[#D3D3D3] h-24 fixed left-0 top-0 shadow-xl ">
        <div className="h-full w-full flex flex-row justify-evenly items-center text-3xl">
          <div className="hover:cursor-pointer">
            <a href="home">
              <i className="fa-solid fa-blog fa-xl"></i>
            </a>
          </div>
          <div className=" flex flex-row justify-around items-center ">
            <a href="home">
              <h1 className="p-2 hover:cursor-pointer hover:border-b-yellow-300 hover:border-b-2 lg:ml-28 xl:ml-28">
                Home
              </h1>
            </a>
            <a href="projects">
              <h1 className="p-2 hover:cursor-pointer hover:border-b-yellow-300 hover:border-b-2">
                Projects
              </h1>
            </a>
            <a href="about">
              <h1 className="p-2 hover:cursor-pointer hover:border-b-yellow-300 hover:border-b-2">
                About
              </h1>
            </a>
          </div>
          <div>
            <a href="home">
              <i className="fa-brands fa-github p-2"></i>
            </a>
            <a href="home">
              <i className="fa-brands fa-linkedin p-2"></i>
            </a>
            <a href="home">
              <i className="fa-brands fa-twitter p-2"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
