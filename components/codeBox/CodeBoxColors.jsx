export default function CodeBoxColors( {rowWord} ) {

    const prefix = "$#22AA44".length;
    const suffix = "#$".length;

    var hex = rowWord.match(/^\$(#[0-9A-F]{6})/gi);
    //console.log( hex, rowWord );
    if ( !hex ) {
        return <span>{rowWord}</span>
    }

    rowWord = rowWord.substr(prefix, rowWord.length - ( prefix + suffix ) );
    hex = hex[0].substr(1);

    return <span style={ {color: hex}}>{rowWord}</span>

}