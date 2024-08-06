"use client";

import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect, useState } from "react";
import Message from "../fragments/Message";
import { LocalizationContext } from "@/store/location-context";


const waitTime = 2000;

function getRandomText(text) {
  return text[Math.floor(Math.random() * text.length)];
}

export default function LoadingBlock() {

  let text = useContext( LocalizationContext ).lang.mainPage.loadingBlock.randomText;
  const [randomText, setRandomText] = useState(text[0]);
  const [totalTime, setTotalTime] = useState(0);
  
  let newTime = Math.floor(Math.random() * 7) * 100 + 300
  if (totalTime + newTime > waitTime) {
    newTime = waitTime - totalTime;
  }

  useEffect(() => {
    const timer = setTimeout(() => {
        setRandomText( getRandomText(text) );
        setTotalTime(prevTotalTime => prevTotalTime + newTime);
    }, newTime);

    return () => {
        clearTimeout( timer );
    }
  }, [totalTime]);

  return (
    <div className="overflow-hidden absolute top-0 left-0 bottom-0 right-0">
      <div className="fixed z-20 top-0 left-0 bottom-0 right-0 h-[100vh] bg-stone-900 animate-opacityLoad fill-mode-forwards flex justify-center items-centers">
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
              <Message code={ ["mainPage", "loadingBlock", "completed"] } />
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
