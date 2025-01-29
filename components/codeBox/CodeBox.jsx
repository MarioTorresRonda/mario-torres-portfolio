import {useRef, useState} from "react";

import LazyLoadComponent from "../fragments/LazyLoadComponent";
import CodeBoxMain from "./CodeBoxMain";

export default function CodeBox( {files} ) {

	const outsideBox = useRef();
	const [height, setHeight] = useState(0)
	const [shown, setShown] = useState(false);

	function onHide() {
		if ( outsideBox.current ) {
			setHeight( outsideBox.current.offsetHeight + 16 );
			setShown( false );
		}
	}

	function onLoad() {
		setShown( true );
	}

	const styles = {}
	if ( height != 0 && !shown ){
		styles.height = height + "px";
	}

	return ( <div ref={outsideBox} style={ styles }>
		<LazyLoadComponent onHide={onHide} onLoad={onLoad} height={height}>
			<CodeBoxMain files={files}></CodeBoxMain>
		</LazyLoadComponent> 
	</div>
	)
}

