export function updateBubbleColors(time) {

    try {
        if ( !document ) {
            return;
        }
    } catch (error) {
        return;
    }
    
    
    const root = document.querySelector(':root');
    if ( !root ) {
        return;
    }
    
    const hue = time;
    const inverseHue = time + 180 - ( time > 180 ? 360 : 0 );
    
    root.style.setProperty('--myColorStartSimple', `hsl(${hue},60%,50%)`);
    root.style.setProperty('--myColorEndSimple', `hsl(${inverseHue},60%,50%)`);
    root.style.setProperty('--myColorStartHover', `hsl(${inverseHue},100%,40%)`);
    root.style.setProperty('--myColorEndHover', `hsl(${hue},100%,40%)`);
}