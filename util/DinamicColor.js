export function updateBubbleColors(time) {

    try {
        if ( !document ) {
            return;
        }
    } catch (error) {
        return;
    }
    

    const sheet = document.styleSheets[0];
    if ( !sheet ) {
        return;
    }

    const rules = sheet.cssRules;
    const hue = time;
    const inverseHue = time + 180 - ( time > 180 ? 360 : 0 );
    
    rules[0].style.setProperty('--myColorStartSimple', `hsl(${hue},60%,50%)`);
    rules[0].style.setProperty('--myColorEndSimple', `hsl(${inverseHue},60%,50%)`);
    rules[0].style.setProperty('--myColorStartHover', `hsl(${inverseHue},100%,40%)`);
    rules[0].style.setProperty('--myColorEndHover', `hsl(${hue},100%,40%)`);
}