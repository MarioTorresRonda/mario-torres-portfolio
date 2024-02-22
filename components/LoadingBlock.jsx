"use client";

import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCallback, useEffect, useState } from "react";

const text = [
  "Cargando Recursos",
  "Cargando la ventana",
  "Cargando contenido",
  "Cargando codigo",
  "Cargando Imagenes",
  "Añadiendo errores al codigo",
  "Añadiento animaciones inutiles",
  "Eliminando Errores",
  "Mirando fotos de gatos",
  "Eliminando contenidos",
  "Repitiendo codigo",
];

const waitTime = 2000;

function getRandomText() {
  return text[Math.floor(Math.random() * text.length)];
}

export default function LoadingBlock() {
  const [randomText, setRandomText] = useState(text[0]);
  const [totalTime, setTotalTime] = useState(0);
  
  let newTime = Math.floor(Math.random() * 7) * 100 + 300
  if (totalTime + newTime > waitTime) {
    newTime = waitTime - totalTime;
  }

  useEffect(() => {
    const timer = setTimeout(() => {
        setRandomText( getRandomText() );
        setTotalTime(prevTotalTime => prevTotalTime + newTime);
    }, newTime);

    return () => {
        clearTimeout( timer );
    }
  }, [totalTime]);

  return (
    <div className="absolute top-0 left-0 bottom-0 right-0 bg-stone-900 z-20 animate-opacityLoad fill-mode-forwards flex justify-center h-[100vh] items-center">
      <div className="md:flex items-center">
        {totalTime != 2000 && (
          <>
            <div className="animate-spin h-10 w-10 md:h-20 md:w-20 bg-slate-200 mx-auto md:mx-0"></div>
            <p className="text-sm md:ml-10 lg:text-base xl:text-xl text-balance mt-3 md:mt-0 ">
              {randomText}...
            </p>
          </>
        )}
        {totalTime == 2000 && (
          <>
            <FontAwesomeIcon icon={faCheck} className="text-4xl" />
            <p className="text-sm md:ml-10 lg:text-base xl:text-xl text-balance mt-3 md:mt-0 ">
              Completado
            </p>
          </>
        )}
      </div>
    </div>
  );
}
