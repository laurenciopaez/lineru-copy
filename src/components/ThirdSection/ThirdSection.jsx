import React from "react";
import Contenedor from "./Contenedor";
import { Image } from "react-bootstrap";
import Contenedor2 from "./Contenedor2";

const ThirdSection = () => {
  return (
    <div className=" bg-white pt-14 flex flex-col">
      <div
        className="m-auto w-[80%] h-[70vh] flex flex-col pb-10 shadow-sm rounded-sm"
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

      <div className="bg-slate-100 w-[80%] m-auto h-[70vh] mt-10 p-4 flex flex-col items-end">
        <div className="text-black text-3xl font-bold w-2/3 flex flex-col text-right mr-10 mt-8">
          <h1>Quieres saber mas sobre tu credito? Aca </h1> 
          <h1>estan los detalles</h1>
        </div>
        <div className="flex flex-row pr-5 pl-5 mt-4 h-[50%]">
          <Contenedor2 icon="https://i.pinimg.com/564x/cf/6c/a4/cf6ca4ad697fad33d23dcd96186265b4.jpg" title="Como funciona?" text="Tendrás un cupo de crédito rotativo para utilizar durante 6 meses. Te aprobamos un monto, pides tus desembolsos, y a medida que pagas, liberas tu cupo." />
          <Contenedor2 icon="https://i.pinimg.com/564x/41/e2/0c/41e20caf218ac540e9251479119fe9a8.jpg" title="Que requisitos?" text="¿Eres mayor de edad y vives en Colombia? Ya tienes la mitad de los requisitos para pedir tu cupo de crédito. Y los otros dos son igual de sencillos." />
          <Contenedor2 icon="https://i.pinimg.com/564x/0e/47/f8/0e47f863552c82c0d9a8ea45f3ecfec4.jpg" title="Cuanto cuesta?" text="Queremos explicarte qué estás pagado, sin costos ocultos ni letra pequeña. Además acá te mostramos cómo pagar menos en cargos e intereses." />
          <Contenedor2 icon="https://i.pinimg.com/564x/84/2b/34/842b34c3c259a83e6af74fa0ed868358.jpg" title="Como pagar?" text="Para estar al día con tu crédito puedes pagar en línea o en miles de puntos a la vuelta de la esquina. Acá están los convenios y las instrucciones." />
        </div>
        <div className="w-full bg-slate-150 h-full">
s
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
