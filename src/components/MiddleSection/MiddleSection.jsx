import React from "react";
import { Image } from "react-bootstrap";

const MiddleSection = () => {
  return (
    <>
      <div
        className="h-[60vh] flex flex-col"
        style={{
          backgroundImage:
            'url("https://i.pinimg.com/564x/34/b1/e4/34b1e41e36964bc37e5c105d34878608.jpg")',
        }}
      >
        <div className="h-20 flex content-center mt-20">
          <Image
            src="https://i.pinimg.com/564x/1a/36/12/1a3612450237133a7b65b56075781eaf.jpg"
            className="h-[8vh] m-auto "
          />
        </div>

        <div className="text-black w-[80%] m-auto content-center text-center text-2xl">
          <p> Con Lineru conoces el dinero facil, rapido y seguro.</p>
          <p>
            Si tenes una conexion a internet no necesitas nada mas. Aplicas en
            10 minutos. Nosotros te damos una respuesta en 15 minutos. Y recibes
            tu dinero en un dia habil.
          </p>
          <p>Eso es todo! A medida que pagas liberas tu cupo nuevamente.</p>
        </div>
      </div>
    </>
  );
};

export default MiddleSection;
