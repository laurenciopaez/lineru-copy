import React, { useEffect, useState } from "react";
import { Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faBriefcase, faMoneyBill, faHandshake } from "@fortawesome/free-solid-svg-icons";

const Contenedor2 = ({ iconName, title, text }) => {
  const [icon, setIcon] = useState();

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
        setIcon(faHandshake)
    }
  };

  useEffect(() => {
    handleIcon(iconName), [];
  });

  return (
    <div className="text-black m-5 flex flex-col h-3/4">
      <FontAwesomeIcon icon={icon} />
      <div className="flex flex-col mt-3">
        <h1 className="font-bold">{title}</h1>
        <p className="mt-2 mb-4">{text}</p>
      </div>
      <a className="text-blue-700">Ver mas sobre mi credito</a>
    </div>
  );
};

export default Contenedor2;
