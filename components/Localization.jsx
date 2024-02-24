'use client'

import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { LocalizationContext } from "@/store/location-context";
import { useContext } from "react";
import FAI from "./FAI";

export default function Localization() {

  const { locale, lang, setLocalization } = useContext( LocalizationContext );

  function setLocale() {
    const newLocale = ( locale == 'en' ? 'es' : 'en')
    setLocalization( newLocale );
  }

  return (
      <div className="absolute top-5 right-5">
        <button onClick={setLocale} >
          <FAI icon={faGlobe} />
        </button>
      </div>
  );
}
