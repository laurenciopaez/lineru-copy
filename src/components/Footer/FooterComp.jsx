import React from "react";
import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitterSquare,
  FaGithubSquare,
  FaDribbbleSquare,
} from "react-icons/fa";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { BiMessageSquareCheck } from "react-icons/bi";
import { BsTelephone } from "react-icons/bs";
import { FiMapPin } from "react-icons/fi";

const FooterComp = () => {
  return (
    <>
      <div className="w-full bg-black flex flex-col-4 py-12 px-28 gap-12">
        <div>
          <h3 className="text-md mb-5 font-extralight"> Contactanos</h3>
          <ul className="text-sm">
            <li className="underline hover:cursor-pointer hover:no-underline hover:text-violet-700 tracking-wide my-2 flex flex-row gap-2">
              {" "}
              <IoChatbubbleEllipsesOutline />
              Chatea con nosotros
            </li>
            <li className="underline hover:cursor-pointer hover:no-underline hover:text-violet-700 tracking-wide my-2 flex flex-row gap-2">
              {" "}
              <BiMessageSquareCheck />
              servicioalcliente@lineru.com
            </li>
            <li className="underline hover:cursor-pointer hover:no-underline hover:text-violet-700 tracking-wide my-2 flex flex-row gap-2">
              {" "}
              <BsTelephone />
              (601) 329 98 33 / L - V: 8:00am a 5:00pm
            </li>
            <li className="underline hover:cursor-pointer hover:no-underline hover:text-violet-700 tracking-wide my-2 flex flex-row gap-2">
              {" "}
              <FiMapPin />
              Carrera 15 # 88 - 21 / Oficina 901 Bogotá, Colombia
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-md mb-5 font-extralight">Legales</h3>
          <ul className="text-sm">
            <li className="underline hover:cursor-pointer hover:no-underline hover:text-violet-700 tracking-wide my-2">
              Terminos y condiciones
            </li>
            <li className="underline hover:cursor-pointer hover:no-underline hover:text-violet-700 tracking-wide my-2">
              Politicas de privacidad
            </li>
            <li className="underline hover:cursor-pointer hover:no-underline hover:text-violet-700 tracking-wide my-2">
              Politicas de seguridad en internet
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-md mb-5 font-extralight">Informacion util</h3>
          <ul className="text-sm">
            <li className="underline hover:cursor-pointer hover:no-underline hover:text-violet-700 tracking-wide my-2">
              Blog
            </li>
            <li className="underline hover:cursor-pointer hover:no-underline hover:text-violet-700 tracking-wide my-2">
              Ayuda
            </li>
            <li className="underline hover:cursor-pointer hover:no-underline hover:text-violet-700 tracking-wide my-2">
              Realizar solicitud Fisica
            </li>
            <li className="underline hover:cursor-pointer hover:no-underline hover:text-violet-700 tracking-wide my-2">
              Nuestros creditos
            </li>
            <li className="underline hover:cursor-pointer hover:no-underline hover:text-violet-700 tracking-wide my-2">
              Mundo Lineru
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-md mb-5 font-extralight">Siguenos en:</h3>
          <div className="flex flex-row gap-4">
            <FaFacebookSquare className="hover:cursor-pointer text-orange-600" />
            <FaInstagram className="hover:cursor-pointer text-orange-600" />
            <FaTwitterSquare className="hover:cursor-pointer text-orange-600" />
            <FaGithubSquare className="hover:cursor-pointer text-orange-600" />
          </div>
        </div>
      </div>
      <div className="w-full bg=white"></div>
    </>
  );
};

export default FooterComp;
