import React, { useState } from "react";
import { Button } from "react-bootstrap";

const HeaderComp = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="z-10  bg-white lg:w-[80%] xl:w-[80%] w-full fixed lg:left-1/2 ;lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 lg:pt-20 px-4 top-0 shadow-xl rounded-md">
      <div className="w-full bg-slate-50 flex justify-start h-1/3 pt-4 content-center ">
        <a className="text-blue-500 font-light fond-md over:opacity-75 transition-opacity duration-300 hover:text-blue-700 hover:bg-slate-50 hover:cursor-pointer ">
          Necesitas ayuda?
        </a>
      </div>
      <div className="w-full flex justify-end gap-3 my-2 ">
        <div className="lg:hidden xl:hidden">
            <Button className="bg-violet-700 text-lg font-medium hover:bg-violet-800 py-2 px-3 rounded-sm shadow-md"
            onClick={toggleMenu}>
            &#8801;
            </Button>
        </div>
        <Button className="bg-violet-700 text-lg font-medium hover:bg-violet-800 py-2 px-3 rounded-sm shadow-md hidden lg:flex xl:flex ">
          Pedir mi credito ya
        </Button>
        <Button className="bg-slate-50 py-2 px-3 rounded-sm shadow-md text-lg text-violet-700 font-semibold hover:text-white duration-150 hover:bg-violet-700 hidden lg:flex xl:flex ">
          Registrate
        </Button>
        <Button className="bg-slate-50 py-2 px-3 rounded-sm shadow-md text-lg text-violet-700 font-semibold hover:text-white duration-150 hover:bg-violet-700 hidden lg:flex xl:flex ">
          Inicia sesion
        </Button>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden xl:hidden">
          <div className="flex flex-col gap-2 mt-4">
            <Button className="bg-violet-700 text-lg font-medium hover:bg-violet-800 py-2 px-3 rounded-sm shadow-md">
              Pedir mi credito ya
            </Button>
            <Button className="bg-slate-50 py-2 px-3 rounded-sm shadow-md text-lg text-violet-700 font-semibold hover:text-white duration-150 hover:bg-violet-700">
              Registrate
            </Button>
            <Button className="bg-slate-50 py-2 px-3 rounded-sm shadow-md text-lg text-violet-700 font-semibold hover:text-white duration-150 hover:bg-violet-700">
              Inicia sesion
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeaderComp;
