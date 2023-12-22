import React from "react";
import Contenedor from "./Contenedor";
import { Image } from "react-bootstrap";

const ThirdSection = () => {
  return (
    <div className="h-[90vh] bg-white pt-14">
      <div
        className="m-auto w-[80%] h-[90%] flex flex-col pb-10 shadow-sm rounded-sm"
        style={{
          backgroundImage: `url("https://i.pinimg.com/564x/e9/2a/ff/e92affa7349324a65fc6d1c31555b6a2.jpg")`,
          backgroundSize: "cover",
        }}
      >
        <div className="w-[60%] m-auto pt-4 text-center">
          <div className="flex flex-row bg-white justify-center w-[40%] shadow-sm p-1 m-auto mb-5">
            <Image src="https://i.pinimg.com/564x/df/2c/49/df2c49dee3881936b8348e6e16c492b9.jpg" className="w-10 mr-2 "/>
            <p className="text-black text-sm m-auto">Nuevo en Lineru</p>
          </div>
          <h1 className="text-4xl font-bold">Mundo Lineru</h1>
          <h1 className="text-4xl font-bold mb-4">Acelera tu vida financiera</h1>
          <p>
            En mundo Lineru te prestamos dinero rapido. Y te ayudamos a mejorar
            tu perfil de credito, para que puedas acceder a creditos mas grandes
            y cumplir tus metas
          </p>
        </div>
        <div className="flex flex-row w-[90%] m-auto">
          <Contenedor
            text="Este el cupo de crédito rápido, simple y siempre disponible que ya conoces. Con él tienes acceso a todos los beneficios de Mundo Lineru."
            icon="https://i.pinimg.com/564x/59/68/4f/59684ffda8ef0843762b689f1e32959c.jpg"
            title="Ten tu crédito a la mano."
          />
          <Contenedor
            text="Cambia hoy tu vida financiera. Nosotros vamos a mostrarte cómo tener más dinero y cómo lograr que te aprueben los créditos que quieras."
            icon="https://i.pinimg.com/564x/d6/9a/06/d69a062eb8175818403cf9be2edc7c8f.jpg"
            title="Domina tus finanzas."
          />
          <Contenedor
            text="Tus movimientos en Lineru te dan puntos. Y tú los cambias por aumentos de cupo, descuentos en tus créditos y más plazo para pagar."
            icon="https://i.pinimg.com/564x/4b/eb/08/4beb080891b8fae894f5573b41918c0e.jpg"
            title="Acumula puntos Lineru."
          />
        </div>
        <a className="bg-white text-black w-[20%] font-semibold rounded-sm text-sm p-2 pr-4 pl-4 m-auto " >Ir a Mundo Lineru</a>
      </div>
    </div>
  );
};

export default ThirdSection;
