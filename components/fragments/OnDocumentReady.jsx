'use client'

import { useEffect } from "react";

export default function OnDocumentReady() {

    useEffect( () => {
        const colection = document.getElementsByClassName("svg-inline--fa");
        while (colection.length > 0) {
          const element = colection[0];
          element.classList.remove("svg-inline--fa");
        }
      })

    return <>
    </>

}