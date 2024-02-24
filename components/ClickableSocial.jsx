import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import FAI from "./FAI";

export default function ClickableSocial({ icon, comma, ...props }) {
  return (
    <Link className="flex ml-[-10px]" {...props}>
      <FAI icon={icon} />
      {comma && <p className="lg:mt-5 text-stone-700 text-md lg:text-2xl">,</p>}
    </Link>
  );
}
