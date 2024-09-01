let messages = {
    Blog: { 
        title: "Blog en el portafolio.",
        subtitle: "Quiero empezar un blog en mi portafolio para añadir las cosas que he hecho, 100%  código propio con JS y React",
        image: "Mesa de trabajo con varias cosas, un portatil, multipls libros y plantas.",
        "chapter 1": "Plan de trabajo.",
        "chapter 1 desc": "Para poder llevar una idea a cabo,  es necesario enumerar las razones, la dirección, el trabajo, las expectativas finales,  las ideas, y una vez con todo eso,  podemos empezar el proyecto. Todo esto es importante, si no queremos encontrarnos en laberintos en desarrollo o perder la dirección de lo que queremos desarrollar.",
        "chapter 2": {
            title: "Razón.",
            desc:  "Suelo programar cosas, pero no las suelo terminar, a demás tengo la manía de no mantenerlas y perder ese conocimiento que podría haber guardado de alguna forma. Quiero explicar en un blog: ",
            list: [
                "Como desarrollo mis ideas.",
                "Como las empiezo a construir.",
                "Y si las consigo terminar, como las termino.", 
            ]
        },
        "chapter 3": {
            title: "Donde.",
            desc:  "Hace un tiempo me cree un portafolio. El portafolio lo tengo vacío por culpa de mi manía a no guardar cosas, me gustaría empezar a rellenarlo. Todavía no tengo ningún proyecto completamente madurado, así que empezaré a explicar pedazos de los proyectos que desarrollé ahí."
        },
        "chapter 4": {
            title: "Ideas.",
            desc:  "Aquí tengo un conjunto de ideas de las cuales me he inspirado:",
            idea1: "Sean Halpin",
            idea1Desc: "Me gusta el menú de notas que tiene, es sencillo, pero directo y bastante limpio.",
            idea2: "Medium.com",
            idea2Desc: "Todo el mundo ha visto alguna vez un blog en Medium, con mucha infografía, con imágenes, código y texto, haciendo todo muy sencillo de leer.",
            idea3: "upstatement.com",
            idea3Desc: "Siempre he querido subrayar la sintaxis del código en mi portafolio, parecido a cómo lo hace upstatements.",
            idea4: "Brittany Chiang",
            idea4Desc: "Mi primera inspiración para hacer un portafolio fue esta chica, me gusta mucho su trabajo.",
        },
        "chapter 5": {
            title: "Diseño.",
            desc: "Se dividirá en tres fragmentos diferentes:",
            fragment1: {
                title: "Fragmento de la barra de navegación.",
                desc: "El fragmento se ubicará después de la barra de navegación del proyecto.",
                desc2: "Cuando hagamos clic en la barra de navegación, seremos redirigidos a la URL /blogs, como en las otras barras de navegación."
            },
            fragment2: {
                title: "Fragmento de la página principal.",
                desc: "Estará compuesto por dos bloques:",
                part1: {
                    title: "Bloque de imagen.",
                    desc: "Mostrará una imagen del blog que se seleccione en el segundo bloque, también contendrá la fecha en la que se subió el blog, y la imagen contendrá un enlace al blog.",
                },
                part2: {
                    title: "Bloque de lista.",
                    desc: "Será un marco, con primero, dos botones a los lados para navegar entre los blogs, y en el centro, la lista que contiene tres blogs.",
                    desc2: "Si se hace clic en una de las filas, la imagen, la fecha y el enlace en el primer bloque cambiarán, y con doble clic, se navegará directamente al blog."
                }
            }
        }
    }
}

export default messages;