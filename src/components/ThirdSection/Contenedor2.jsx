import React from "react";
import { Image } from "react-bootstrap";

const Contenedor2 = ({icon, title, text}) => {
    return (
        <div className="text-black m-5 flex flex-col h-3/4">
            <Image src={icon} className="w-10"/>
            <div className="flex flex-col mt-3">
                <h1 className="font-bold">{title}</h1>
                <p className="mt-2 mb-4">{text}</p>
            </div>
            <a className="text-blue-700">
                Ver mas sobre mi credito
            </a>
        </div>
    )
}

export default Contenedor2;