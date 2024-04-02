'use client'

import { useNavigate } from "@/hooks/useNavigate";
import { MenuContext } from "@/store/menu-context";

export default function ClientLink( { title, url, children }  ) {

  const { navigate } = useNavigate( MenuContext);

  return (
    <button onClick={() => navigate( title, url )}>
      <p className="text-stone-400">
        {children}
      </p>
    </button>
  );
}
