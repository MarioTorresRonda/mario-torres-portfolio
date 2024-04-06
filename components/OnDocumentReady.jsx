'use client'

import { useEffect } from "react";

export default function OnDocumentReady() {

    useEffect( () => {
        const colection = document.getElementsByClassName("svg-inline--fa");
        while (colection.length > 0) {
          const element = colection[0];
          element.classList.remove("svg-inline--fa");
        }

        setTimeout(() => {
          document.body.classList.remove("overflow-hidden");
        }, 4000);
      })

    return <>
    </>

}