import useElementPosition from "@/hooks/useElementPosition";
import Message from "./Message";
import useWindowScroll from "@/hooks/useWindowScroll";
import { useEffect, useState } from "react";
import useWindowSize from "@/hooks/useWindowSize";

const tooltipTypes = {
  tooltip : "tooltip",
  reverse : "tooltip-UP"
}

export default function Tooltip({ children, className, text }) {

  const { ref, position } = useElementPosition();
  const [ windowW, windowH ] = useWindowSize();
  const [tooltipType, setTooltipType] = useState(tooltipTypes.tooltip);

  useEffect(() => {
    if ( position.inside ) {
      setTooltipType( position.top > windowH / 2 ? tooltipTypes.reverse : tooltipTypes.tooltip )
    }
  }, [position, windowH])
  

  return (
    <div ref={ref} className={`has-tooltip ${className} `}>
      {children}
      <span className={tooltipType}> <Message code={text}/> </span>
    </div>
  );
}
