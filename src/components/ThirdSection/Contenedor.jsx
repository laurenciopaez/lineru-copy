import React from "react";
import { Image } from "react-bootstrap";

const Contenedor = ({ icon, title, text }) => {
  return (
    <div className="bg-white m-2 text-black p-4 shadow-sm rounded-sm flex flex-col">
      <Image src={icon} className="w-10" />
      <div className="h-3/4">
        <h1 className="font-bold">{title}</h1>
        <p>{text}</p>
      </div>

      <Image
        src="https://i.pinimg.com/564x/b4/a4/2c/b4a42c48377b754fa5548227753294f6.jpg"
        className="w-10"
      />
    </div>
  );
};

export default Contenedor;
