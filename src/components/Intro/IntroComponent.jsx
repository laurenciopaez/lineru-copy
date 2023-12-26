import React from "react";

const IntroComponent = () => {
  return (
    <div
      className="w-full h-[90vh] bg-blue-100 pt-36"
      style={{
        backgroundImage:
          'url("https://images.pexels.com/photos/3765114/pexels-photo-3765114.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
        backgroundSize: "cover",
        backgroundPosition: "-70%",
        width: "screen",
      }}
    >
      <div className="w-[80%] m-auto ">
        <h1 className="text-white font-bold text-6xl w-[50%]" style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }} >
          Lineru es dinero sin enredos.
        </h1>
        <h3 className="mt-2 text-white text-xl font-medium " style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}>
          Pide tu cupo de credito en 15 minutos y recibe el dinero en{" "}
          <strong> 1 dia habil. </strong>
        </h3>
        <h3 className="text-white text-xl font-medium" style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}>
          Desde <strong>$150.000</strong> hasta <strong>$1.2000.000.</strong>
        </h3>
        <h3 className="text-white text-xl font-medium" style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}>
          Sin tramites, filas, anticipos ni cargos ocultos.
        </h3>
        <a className="text-blue-700 text-xl font-semibold" >
          Como funciona tu cupo de credito?
        </a>
      </div>
      <div className="w-[80%] m-auto flex flex-col bg-white rounded-lg shadow-lg mt-4 pl-3 pr-3 pt-2 pb-2 mb-3">
        <form className="flex flex-row">
          <div className="w-3/4 ml-4">
            <h4 className="text-black text-sm mb-2 ">
              Cuanto dinero necesitas?
            </h4>
            <input
              required
              placeholder="$300.000"
              className="w-full border-black border-b-2 pb-2  text-black text-3xl pl-2 pr2 hover:cursor-pointer py-2"
            ></input>
            <p className="text-black font-light text-sm ml-2 mt-2 mb-3">Ingresa multiplos de $10.000</p>
          </div>

          <div className="flex content-center w-1/4 justify-center">
            <button
              type="submit"
              className="bg-violet-700 pl-2 pr-2 rounded-sm h-10 m-auto font-medium hover:bg-violet-900 duration-150 my-auto "
            >
              Pedir mi credito ya
            </button>
          </div>
        </form>
        <a className="text-blue-700 text-md font-medium mb-2 ml-2 hover:text-blue-800 hover:text-lg duration-500 hover:cursor-pointer">Mira un ejemplo</a>
      </div>
    </div>
  );
};

export default IntroComponent;
