'use client'

import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import ClickableSocial from "@/components/ClickableSocial";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

export default function LocalizationS() {

  const ClickableGlobe = <ClickableSocial href="?lang=en" icon={faGlobe} />

  return (
    <Suspense fallback={ClickableGlobe}>
      <Localization />
    </Suspense>
  )
}

function Localization() {

  const searchParams = useSearchParams();
  const lang = searchParams.get("lang");

  let url = '?lang=es';
  if ( lang == 'es' ) {
    url = '?lang=en';
  }

  const ClickableGlobe = <ClickableSocial href={url} icon={faGlobe} />

  return (
      <div className="absolute top-5 right-5">
        { ClickableGlobe }
      </div>
  );
}
