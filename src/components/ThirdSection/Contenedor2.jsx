import React, { useEffect, useState } from "react";
import { Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faBriefcase,
  faMoneyBill,
  faHandshake,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Contenedor2 = ({ iconName, title, text }) => {
  const [icon, setIcon] = useState();
  const [ref, inView] = useInView({
    triggerOnce: true,
  })

  const handleIcon = (iconName) => {
    if (iconName === "faCartShopping") {
      setIcon(faCartShopping);
    }
    if (iconName === "faBriefcase") {
      setIcon(faBriefcase);
    }
    if (iconName === "faMoneyBill") {
      setIcon(faMoneyBill);
    }
    if (iconName === "faHandshake") {
      setIcon(faHandshake);
    }
  };

  useEffect(() => {
    handleIcon(iconName), [];
  });

  return (
    <div className="text-black m-5 flex flex-col hover:cursor-pinter ">
      <motion.div
      ref={ref}
        initial={{ x: "20%", opacity: 0 }}
        animate={inView ? { x: 0, opacity: 1 }: {}}
        transition={{ duration: 0.3, type: "easeIn" }}
      >
        <FontAwesomeIcon icon={icon} className="h-10" />
      </motion.div>
      <div className="flex flex-col mt-3">
        <h1 className="font-bold text-lg">{title}</h1>
        <p className="mt-2 mb-4">{text}</p>
      </div>
      <a className="text-blue-700 hover:underline hover:cursor-pointer duration-150 flex items-end h-full">
        Ver mas sobre mi credito
      </a>
    </div>
  );
};

export default Contenedor2;
