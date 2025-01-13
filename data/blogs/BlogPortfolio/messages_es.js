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
            },
            fragment3: {
                title: "Fragmento principal.",
                desc:  "Se diviira en dos estados:",
                part1: {
                    title: "Sin post seleccionado.",
                    desc:  "Se mostrará una ventana con una lista, la lista contendrá un scroll infinito de todo los post que hay actualmente, el cual estará por:",
                    list: [
                        "Una imagen sencilla, con bordes redondeados.",
                        "El título del post.",
                        "El subtítulo del post.", 
                        "Y cuánto tiempo ha pasado desde que se creó con una badge, si es menor a un mes, deberá de ser \“nuevo\”.", 
                    ]
                },
                part2: {
                    title: "Con post seleccionado.",
                    desc:  "Cual estara formado de multiples partes, una suma de: ",
                    list: [
                        "Un navbar auxiliar a la derecha de la ventana con los capitulos del blog.",
                        "El Título del post.",
                        "El subtítulo del post.", 
                        "Múltiples capítulos, con ellos, siendo capaces de tener múltiples capítulos tambien.", 
                        "Imagenes, con diferentes distribuciones y efectos, como zoom, collage o carrusel.", 
                        "Bloques de texto / Bloqes de codigo, teniendo la opción de copiar rapidamente el texto.", 
                        "Texto con enlaces, con un aviso al navegar a otra página.", 
                        "Texto general, con tamaño, color y efectos personalizables.", 
                    ]
                },
            },
        },
        "chapter 6": {
            title: "Plan de desarrollo",
            desc: "Parecido al funcionamiento de proyectos, creare un archivo con una lista de blogs, donde cada blog será un objeto JSON con formato:",
            desc2: "Con lo que tiene la lista de blogs, crearemos el Fragmento mainpage, donde mostrará los campos título, subtítulo, una fecha  la imagen con la descripción dada en el diseño por cada línea objeto de la lista",
            desc3: "el campo file te redirigirá a un archivo JSX que se cargara de forma asíncrona, el archivo tendra una forma similar a: ",
            desc4: "Para utilizar el sistema de traducción ya implementado, todos los textos dentro del blog seran códigos del archivo de traducción.",
            desc5: "Estos códigos solo se encontraran dentro del archivo de traducción si el blog ha sido cargado, para reducir tiempo de carga y memoria utilizada.",
        },
        "chapter 7": {
            title: "Trabajo",
            desc: "Aquí explicaré todos los pasos del trabajo necesarios para completar lo descrito en el plan.",
            part1: {
                title: "Implementacion",
                fragment1: {
                    title: "Fragmento de la barra de navegación.",
                    desc: "Añado el navegamiento Blog al sistema de navegación ya creado, añadiendo al archivo de configuración JSON un objeto con la información para el Blog.",
                    desc2: "Cada objeto dentro del JSON, está formado por un código para la traducción, un número, un símbolo y una url.",
                    desc3: "Una vez guardado el fichero y recargado la página, se mostrará el blog en la nueva barra de navegación."
                },
                fragment2: {
                    title: "Fragmento en ventana principal",
                    desc: "Utilizamos los estilos ya existente para crear un diseño parecido al de los proyectos:",
                    explication1: "el fragmento <ContentBox>, sirve para actualizar de forma responsiva el tamaño que utiliza el bloque.",
                    explication2: "el conjunto de <div> sirven para otorgar mitad de espacio para el <BlogResumeList> y la otra mitad de espacio para <BlogResumeItemImage />.",
                    fragment1: {
                        title: "BlogResumeList:",
                        desc: "El Fragmento va a mostrar 3 fragmentos <BlogResumeItem>, y flechas a los lados para cambiar entre páginas.",
                        explanation1: "Mostrará los primeros 3 blogs de la lista de blogs.",
                        explanation2: "Importamos la lista al fragmento.",
                        explanation3: "Para mostrar solo 3 blogs, limitamos mediante una variable de “page”, la cual también nos permitirá navegar.",
                        explanation4: "Y la utilizaremos en mostrar la variable de la lista de blogs:",
                        explanation5: "Para poder navegar entre los diferentes “paginas” de la lista, añadiremos botones a los lados para que modifiquen el numero que se muestra",
                    },
                
                }
            }
        }
    }
}

export default messages;