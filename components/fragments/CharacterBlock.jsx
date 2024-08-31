'use client'

import useWindowSize from "@/hooks/useWindowSize";
import SVG from "../fragments/SVG";
import { useState, useRef, useLayoutEffect, useEffect } from 'react'

export default function CharacterBlock({ className, startCharacter, endCharacter, mainClassName = "", children }) {
    
    const [height, setHeight] = useState(0)
    const ref = useRef(null)
    const windowSize = useWindowSize();

    useEffect(() => {
      setHeight(ref.current.clientHeight);
    }, [windowSize[0], windowSize[1]])

    return (
		<div className={`flex gap-2 svg-fondo ${mainClassName}`} >
			<SVG char={startCharacter} height={height} />
			<div className={className} ref={ref}>
                { children }
            </div>
			<SVG char={endCharacter} height={height} className="mt-auto"/>
		</div>
	);
}
