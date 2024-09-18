import useHash from "@/hooks/useHash";
import { useCallback, useEffect, useRef } from "react";


export default function ScrollAnchor( {anchor, children} ) {

    const ref = useRef();
    const hash = useHash();

    const handleHashChange = useCallback(() => {
        if (hash.substring(1) === anchor && ref.current) {
            // Smoothly scroll to the div
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [anchor, hash, ref]);

    useEffect(() => {
        // Initial check
        handleHashChange();
        // Listen for hash changes
        window.addEventListener('hashchange', handleHashChange);
        return () => {
            // Cleanup
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, [handleHashChange]);


    return <div ref={ref} id={anchor} key={anchor}> {children} </div>
}