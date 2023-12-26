import React from "react";
import { Button } from "react-bootstrap";

const HeaderComp = () => {
    return (
        <div className="z-10  bg-white w-[80%] fixed left-1/2 transform -translate-x-1/2 -translate-y-1/2 pt-20 px-4 top-0 shadow-xl rounded-md">
            <div className="w-full bg-slate-50 flex justify-start h-1/3 pt-4 content-center ">
                <a className="text-blue-500 font-light fond-md over:opacity-75 transition-opacity duration-300 hover:text-blue-700 hover:bg-slate-50 hover:cursor-pointer ">
                    Necesitas ayuda?
                </a>
            </div>
            <div className="w-full flex justify-end gap-3 my-2 ">
                <Button className="bg-violet-700 text-lg font-medium hover:bg-violet-800 py-2 px-3 rounded-sm shadow-md">Pedir mi credito ya</Button>
                <Button className="bg-slate-50 py-2 px-3 rounded-sm shadow-md text-lg text-violet-700 font-semibold hover:text-white duration-150 hover:bg-violet-700">Registrate</Button>
                <Button className="bg-slate-50 py-2 px-3 rounded-sm shadow-md text-lg text-violet-700 font-semibold hover:text-white duration-150 hover:bg-violet-700">Inicia sesion</Button>

            </div>
        </div>
    )
}

export default HeaderComp;