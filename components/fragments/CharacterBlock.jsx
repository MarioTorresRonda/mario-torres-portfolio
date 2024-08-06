'use client'

import SVG from "../fragments/SVG";
import { useState, useRef, useLayoutEffect } from 'react'

export default function CharacterBlock({ className, startCharacter, endCharacter, mainClassName = "", children }) {
    
    const [height, setHeight] = useState(0)
    const ref = useRef(null)

    useLayoutEffect(() => {
        function updateheight() {
            setHeight(ref.current.clientHeight)
        }
        window.addEventListener('resize', updateheight);
        updateheight();
        return () => window.removeEventListener('resize', updateheight);
      }, []);

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
