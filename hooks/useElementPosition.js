import { useEffect, useRef, useState } from "react";
import useWindowSize from "./useWindowSize";
import useWindowScroll from "./useWindowScroll";

export default function useElementPosition() {

    const ref = useRef();
    const [position, setPosition] = useState({ top: 0, left: 0, width: 0, height: 0 });
    const [ windowW, windowH ] = useWindowSize();
    const windowScroll = useWindowScroll();   


    useEffect(() => {
      const updatePosition = () => {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();

          const inside = rect.top > 0 && rect.top < windowH;

          setPosition({
            top: rect.top,
            left: rect.left,
            width: rect.width,
            height: rect.height,
            inside: inside
          });
        }
      };
      updatePosition();
      window.addEventListener("scroll", updatePosition);
    }, [ windowW, windowH, windowScroll ]);

    return { ref, position };
}