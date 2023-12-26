import React from "react";

const Contenedor3 = ({number, title, text, strong}) => {
    return (
        <>
        <div className="text-black">
            <div className="bg-yellow-500 rounded-full items-center justify-center flex font-bold text-2xl p-1 w-12 h-12  ">{number}</div>
            <h1 className="font-bold text-lg mt-5 mb-5">{title}</h1>
            <p>{text} <strong>{strong}</strong></p>
        </div>
        </>
    )
}

export default Contenedor3;