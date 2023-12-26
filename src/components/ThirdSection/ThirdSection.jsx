import React from "react";
import Contenedor from "./Contenedor";
import { Button, Image } from "react-bootstrap";
import Contenedor2 from "./Contenedor2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import Contenedor3 from "./Contenedor3";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ThirdSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  })
  const [ref2, inView2] = useInView({
    triggerOnce: true,
  })

  return (
    <div className=" bg-white pt-14 flex flex-col">
      <div
        className="m-auto w-[80%] flex flex-col pb-2 shadow-md rounded-sm"
        style={{
          backgroundImage: `url("https://i.pinimg.com/564x/e9/2a/ff/e92affa7349324a65fc6d1c31555b6a2.jpg")`,
          backgroundSize: "cover",
        }}
      >
        <div className="w-[60%] m-auto pt-4 text-center">
          <div className="flex flex-row bg-white justify-center text-center content-center w-[40%] shadow-sm p-1 m-auto mb-5 hover:scale-110 duration-500 hover:cursor-pointer">
            <Image
              src="https://i.pinimg.com/564x/df/2c/49/df2c49dee3881936b8348e6e16c492b9.jpg"
              className="lg:w-10 xl:w-10 hidden lg:flex mr-2  "
            />
            <p className="text-black text-sm ">Nuevo en Lineru</p>
          </div>
          <h1 className="lg:text-4xl xl:text-4xl md:text-xl text-lg font-bold">Mundo Lineru</h1>
          <h1 className="lg:text-4xl xl:text-4xl md:text-xl text-lg  font-bold mb-4">
            Acelera tu vida financiera
          </h1>
          <p className="text-base lg:text-lg xl:text-lg">
            En mundo Lineru te prestamos dinero rapido. Y te ayudamos a mejorar
            tu perfil de credito, para que puedas acceder a creditos mas grandes
            y cumplir tus metas
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 sm:grid-cols-1 gap-4  w-[90%] m-auto">
          <motion.div
          ref={ref}
         
            initial={{ x: "-20%", opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.3, type: "easeIn" }}
          >
            <Contenedor
              text="Este el cupo de crédito rápido, simple y siempre disponible que ya conoces. Con él tienes acceso a todos los beneficios de Mundo Lineru."
              icon="https://i.pinimg.com/564x/59/68/4f/59684ffda8ef0843762b689f1e32959c.jpg"
              title="Ten tu crédito a la mano."
            />
          </motion.div>
          <motion.div
          ref={ref}

            initial={{ x: "-20%", opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.3, type: "easeIn" }}
          >
            <Contenedor
              text="Cambia hoy tu vida financiera. Nosotros vamos a mostrarte cómo tener más dinero y cómo lograr que te aprueben los créditos que quieras."
              icon="https://i.pinimg.com/564x/d6/9a/06/d69a062eb8175818403cf9be2edc7c8f.jpg"
              title="Domina tus finanzas."
            />
          </motion.div>
          <motion.div
          ref={ref}
            initial={{ x: "20%", opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.3, type: "easeIn" }}
          >
            <Contenedor
              text="Tus movimientos en Lineru te dan puntos. Y tú los cambias por aumentos de cupo, descuentos en tus créditos y más plazo para pagar."
              icon="https://i.pinimg.com/564x/4b/eb/08/4beb080891b8fae894f5573b41918c0e.jpg"
              title="Acumula puntos Lineru."
            />
          </motion.div>
        </div>
        <div className=" bg-black mx-auto my-4">
          <Button className="bg-white text-black font-semibold rounded-sm text-sm py-2 px-4 mx-auto hover:cursor-pointer hover:-translate-y-1 hover:translate-x-1 duration-150">
            Ir a Mundo Lineru
          </Button>
        </div>
      </div>

      <div className="bg-slate-100 w-[80%] m-auto  mt-10 p-4 flex flex-col items-end ">
        <div className="text-black lg:text-4xl xl:text-4xl md:text-xl text-lg  font-bold w-2/3 flex flex-col text-right mr-10 mt-8">
          <h1>Quieres saber mas sobre tu credito? Aca </h1>
          <h1>estan los detalles</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 sm:grid-cols-1 gap-4 pr-5 pl-5 mt-4">
          <Contenedor2
            iconName="faCartShopping"
            title="Como funciona?"
            text="Tendrás un cupo de crédito rotativo para utilizar durante 6 meses. Te aprobamos un monto, pides tus desembolsos, y a medida que pagas, liberas tu cupo."
          />
          <Contenedor2
            iconName="faBriefcase"
            title="Que requisitos?"
            text="¿Eres mayor de edad y vives en Colombia? Ya tienes la mitad de los requisitos para pedir tu cupo de crédito. Y los otros dos son igual de sencillos."
          />
          <Contenedor2
            iconName="faMoneyBill"
            title="Cuanto cuesta?"
            text="Queremos explicarte qué estás pagado, sin costos ocultos ni letra pequeña. Además acá te mostramos cómo pagar menos en cargos e intereses."
          />
          <Contenedor2
            iconName="faHandshake"
            title="Como pagar?"
            text="Para estar al día con tu crédito puedes pagar en línea o en miles de puntos a la vuelta de la esquina. Acá están los convenios y las instrucciones."
          />
        </div>
      </div>
      <div className="w-[80%] bg-slate-200 text-black m-auto pt-2 pb-2 shadow-md ">
        <div className="m-auto w-[80%] text-xs justify-stretch">
          <h1 className="font-bold ">
            Ejemplo de credito <FontAwesomeIcon icon={faCircleExclamation} />
          </h1>
          <p className="my-1">
            Pensemos en un préstamo de trescientos mil pesos (COP. $300.000) a
            90 días con una tasa de interés efectiva anual (EA) del 36%, el
            costo que deberás contemplar es de $83.158 COP. IVA incluido que
            sumados al valor solicitado dará un total a pagar de $383.158 COP.
          </p>
          <p className="my-1">
            <strong>Recuerda: </strong>La tasa máxima de interés efectiva anual
            vigente en Colombia para Diciembre de 2023 es del 37.56% EA. Esta
            tasa de interés varía cada mes y se calcula de acuerdo a lo
            establecido por el Banco de la República y la Tasa de Usura vigente.{" "}
          </p>
        </div>
      </div>

      <div className="w-[80%] m-auto mt-20 shadow-md">
        <h1 className="text-black font-bold text-4xl">
          Pide tu credito 100% en linea en cuatro pasos
        </h1>
        <div className="grid grid-cols-1 xl:grid-cols-4 md:grid-cols-2 lg:grid-cols-4 sm:grid-cols-1 gap-4 pr-5 pl-5 mt-10">
          <motion.div
          ref={ref2}
            initial={{ y: "-20%", opacity: 0 }}
            animate={inView2 ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.3, type: "easeIn" }}
          >
            <Contenedor3
              number="1"
              title="Calcula tu
crédito"
              text="Sin ningún compromiso. Dinos cuánto dinero necesitas. Cuándo podrías pagarlo. Y mira cómo se ven los números."
              strong="Toma 1 minuto."
            />
          </motion.div>
          <motion.div
          ref={ref2}
            initial={{ y: "-20%", opacity: 0 }}
            animate={inView2 ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, type: "easeIn" }}
          >
            <Contenedor3
              number="2"
              title="Regístrate y
pídelo"
              text="¿Estás de acuerdo con los números? Perfecto. Ahora crea tu cuenta en Lineru y completar el formulario."
              strong="Toma 10 minutos."
            />{" "}
          </motion.div>
          <motion.div
          ref={ref2}
            initial={{ y: "-20%", opacity: 0 }}
            animate={inView2 ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.9, type: "easeIn" }}
          >
            <Contenedor3
              number="3"
              title="Firma tu
contrato"
              text="¡Solicitud aprobada! solo te queda firmar. Para eso te envíamos dos códigos. Y con ellos haces tu firma digital."
              strong="Toma 2 minutos."
            />
          </motion.div>
          <motion.div
          ref={ref2}
            initial={{ y: "-20%", opacity: 0 }}
            animate={inView2 ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 1.2, type: "easeIn" }}
          >
            <Contenedor3
              number="4"
              title="Recibe el
dinero"
              text="Una vez firmes ponemos el dinero en tu cuenta. Normalmente lo hacemos en 4 horas. "
              strong="Y máximo nos toma un
día hábil."
            />
          </motion.div>
        </div>
        <div className="m-auto justify-center content-center flex mt-6 mb-8">
          <Button className="text-violet-700 mr-4 font-semibold pt-1 pb-1 pr-4 bg-violet-200 border-sm pl-4 hover:bg-violet-700 hover:cursor-pointer hover:text-white duration-150 shadow-md">
            Como funciona?
          </Button>{" "}
          <div className="bg-black">
            <Button className="bg-violet-700 border-sm shadow-md font-semibold text-lg pt-1 pb-1 pr-4 pl-4 hover:bg-violet-800 hover:translate-x-1 hover:-translate-y-1">
              Calcula tu credito
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
