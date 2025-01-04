import Link from "next/link";
import FAI from "../fragments/FAI";

export default function ClickableSocial({ icon, comma, className, ...props }) {
  return (
    <Link className={`flex ml-[-10px]}`} {...props}>
      <FAI icon={icon} className="w-[20px] h-[20px] md:w-[35px] md:h-[35px] lg:w-[50px] lg:h-[50px] text-slate-500 dark:text-stone-700 hover:text-slate-700 dark:hover:text-stone-500 hover:scale-[1.2]" />
      {comma && <p className="lg:mt-5 text-stone-400 dark:text-stone-700 text-md lg:text-2xl">,</p>}
    </Link>
  );
}
