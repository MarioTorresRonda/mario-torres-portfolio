import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import ClickableSocial from "./ClickableSocial";
import Link from "next/link";

export default function Localization( {searchParams} ) {
  return (
    <div className="absolute top-5 right-5">
        { ( !searchParams.lang || searchParams.lang == 'en' ) && <ClickableSocial href="?lang=es" icon={faGlobe} /> }
        { searchParams.lang == 'es' && <ClickableSocial href="?lang=en" icon={faGlobe} /> }
    </div>
  );
}
