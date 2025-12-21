let messages = {
    codeBox: { 
        title: "CodeBox.",
        subtitle: "Crear una caja donde se muestre el código formateado y con sintaxis correcta",
        reason: {
            title: "Razón",
            text: "Dentro del blog me es necesario mostrar el código para mostrar un ejemplo de como he implementado yo los textos",
        },
        where: {
            title: "Donde",
            text: "Sera un componente dentro del proyecto portfolio",
        },
        ideas: {
            title: "Ideas",
            text: "Mi maxima inspiración fue el propio VSCode",
            imgTitle: "Visual Studio Code",
            imgText: "Captura de pantalla de un entorno de Visual Studio"
        },
        design: {
            title: "Diseño",
            text: "Estará formado por unna caja que tendrá dos estados:",
            minimized: {
                title: "Reucido",
                text: "Se mostrará una caja con el código mínimo, limitado por las líneas que se van a mostrar y un boton inferior para Maximizar el editor."
            },
            maximized: {
                title: "Maximizado",
                text: "Se mostrará la misma caja que con el código mínimo, pero esta vez con algo más de altura, dividida en dos bloques, siendo el primero el navbar de los recursos que utilizó en ese proyecto, y el otro bloque, el código completo del objeto del navbar seleccionado.",
            },
        },
        implementation: {
            title: "Plan de Implementación",
            text: "Deberemos separar en varios componentes la implementación",
            text2: "Principalmente en el Navbar, la caja de texto y los botones adicionales.",
            navbar: {
                text: "El navbar deberá ser una copia parecido de:",
                foot: "Señalando el objeto abierto."
            },
            codebox: {
                text: "La caja de texto deberá ser una copia parecida de:",
                foot: "Mostrando a la izquierda los números de fila en la cual se encuentra la línea y formateando el texto para colorear el texto con el formato que corresponda (JSX; JS; HTML)",
            },
            buttons : {
                text: "Los botones deberán localizarse flotantes en alguna esquina de la caja de texto, y nos permitirán:",
                button1: "Abrir la caja, mostrando el fichero entero, y mostrando en el navbar todos los ficheros relacionados.",
                button2: "Copiar el código que se muestra, esto deberá corresponder al texto que se está mostrando (maximizado o minimizado)",
            }
        },
        work: {
            title: "Trabajo",
            subtitle: "Aquí explicaré todos los pasos del trabajo necesarios para completar lo descrito en el plan.",
            implementation : {
                title: "Implementación",
                text: "Creamos un componente parecido a todos los demás que se encuentran dentro de los blogs, en este caso, al componente se le pasará una lista de ficheros",
                fileList: {
                    title: "Lista Ficheros",
                    text: "La estructura de los objetos de esta lista, es el nombre con el que se mostrará minimizado, y la ruta del fichero entera desde la base del proyecto, para poder abrir el texto que contiene (Se intentará que sean copias, mantenidas en la carpeta data, para que futuros cambios no afecten al texto), esté lista puede luego contener información extra: como que fichero está seleccionado por defecto, etc…",
                    example: "Así:"
                },
                formats: {
                    title: "Formatos",
                    text: "La estructura de estos ficheros será un objeto, este objeto dentro tendrá:",
                    list: [
                        "una lista de objetos, los cuales tendrán un color hexadecimal, una búsqueda regExp, una condición para poder ejecutarse y una variable que podrán alternar:",
                        "una lista de cadenas, que tiene el identificador de las variables que se utilizan, esta lista es utilizada para reiniciar los valores",
                        "una lista de objetos con un identificador de una variable y una función, esta variable se rellenará con el valor devuelto por la función, que se ejecutará al inicio del formateo",
                        "una lista de objetos con un identificador de una variable y una función, esta variable se rellenará con el valor devuelto por la función, que se ejecutará por cada bloque",
                    ],
                },
                codeBox: {
                    title: "CodeBox",
                    text: "El codeBox será el fragmento encargado de mostrar la cabecera: contendrá todos los nombres pasados en la lista; el fichero abierto: contendrá una versión “decorada” del texto del fichero encontrado en esa ruta; y los botones: contendrá los botones explicados en pasos anteriores.",
                    navbar: {
                        title: "NavBar",
                        text: "Este fragmento muestra una lista horizontal con los ficheros dentro del archivo anteriormente mencionado",
                        foot: "Si el fragmento principal está con la variable minimizada a true, solo mostrará el fichero con la propiedad select igual a true.",
                    },
                    body: {
                        title: "Cuerpo",
                        text1: "Una vez pasado este fichero al fragmento del blog CodeBox, este consulta en una api ese fichero, y lo muestra mediante un fragmento, para controlar varias formas de mostrarse:",
                        text2: "Para que tenga formato y muestre colores como cualquier IDE moderno, antes se formateara:",
                    },
                    buttons: {
                        title: "Botones",
                        text: "Es el encargado de mostrar los dos botones en la parte derecha superior, siendo estos botones los encargados de copiar el texto mostrado y de alternar la variable minimizada:"
                    }
                },
                apiCall: {
                    title: "llamada API",
                    text1: "Se crea una ruta en la dirección api/files/route.js",
                    text2: "Esta acepta un body con la propiedad route, la cual es un path, Desde la carpeta donde se encuentra el proyecto, lee el archivo en la ruta indicada en el path route.",
                    text3: "Para que no se pueda explotar una vulnerabilidad y permitir leer cualquier fichero del disco, solo permitimos leer ficheros dentro de la carpeta data:"
                },
                fileContext: {
                    title: "Contexto de ficheros",
                    text1: "Existirá un contexto dentro del proyecto, el cual guarde los ficheros, sin formatear y ya anteriormente formateados:",
                    text2: "Las funciones son:",
                    footer2_1: "Esta función devuelve el texto del fichero si se encuentra ya anteriormente en la lista codeBoxState.loadedFiles, si no, llama a la API que devuelve el texto del fichero, y la respuesta la guarda dentro de la lista codeBoxState.loadedFiles",
                    footer2_2: "Esta función devuelve el texto del fichero formateado si se encuentra ya anteriormente en la lista codeBoxState.formattedFiles, si no, llama a una función que formatea el texto del fichero, y la respuesta la guarda dentro de la lista codeBoxState.formattedFiles",
                    footer2_3: "Estas funciones sólo eliminan las listas respectivas que se han descrito anteriormente, codeBoxState.loadedFiles y codeBoxState.formattedFiles."
                },
                formatTextFunction: {
                    title: "Función Formatear Texto",
                    text: "Esta función se encarga de convertir el texto del fichero, en una cadena con formato, para ello primero, separa la cadena en subcadenas de bloques “importantes”, y posteriormente separar esa lista, por una lista de listas separadas por filas:",
                    blockSplit: {
                        title: "Separar por bloques",
                        text1: "Para separar el texto en bloques importantes, utilizamos una lista generica:",
                        text2: "Dentro de la función se recorre el fichero que hemos leído con la api; con un índice, para poder saltar caracteres, y una vez comprobado que el carácter no se salta, se saca el valor de esta cadena de la lista:",
                        text3: "Si el formato tiene el valor slashComment a true, sera un comentario que se ha creado mediante “/”, comprobamos también que no se encuentra dentro de una cadena de texto",
                        text4: "Si la letra en la cual nos encontramos es “/”, buscamos si la siguiente letra es “/”o “*” para activar la variable que designa que nos encontramos dentro de un tipo de comentario",
                        text5: "Antes de este fragmento de código, si ya nos encontramos dentro de un comentario simple, avanzamos hasta llegar a un salto de línea, donde este comentario se acaba, y añadimos a la lista de cadenas final, una cadena desde el principio del comentario hasta el final de este.",
                        text6: "Procedemos hacer lo mismo con el comentario de varias líneas, pero en este caso cuando encontremos” */”",
                        text7: "Posterior al procesamiento de comentarios, miramos si nos encontramos dentro de una cadena de texto:",
                        foot7_1: "La primera parte se encarga de ignorar todo hasta llegar al final del mismo carácter que empezó la cadena de texto.",
                        foot7_2: "La segunda parte, busca que la letra sea la misma que algún símbolo que empiece una cadena de texto, si es así, lo guarda en la variable que comprueba la primera parte",
                        text8: "La última parte del método, comprueba si hay algun caracter “importante” y si es así, crea un nuevo bloque desde el anterior bloque hasta este carácter:"
                    },
                    escapeSplit: {
                        title: "Separar por saltos",
                        text1: "Una vez separado por bloques, separamos una vez más por saltos de línea, en este caso es un proceso mucho más directo:",
                    },
                    resetVars: {
                        title: "Reiniciamos variables del formato",
                        text: "Los formatos tienen la capacidad de determinar si se encuentran dentro de algún carácter, por ejemplo “<” para HTML, cada vez que empecemos a formatear, primero iniciaremos todas estas variables",
                    },
                    formatInit: {
                        title: "Iniciamos el formato",
                        text: "Al mismo tiempo ejecutaremos todas las funciones que se necesitan llamar al inicio dentro del formato, por ejemplo, reconocer que fragmentos están dentro de una clase HTML:",
                    },
                    blockColoring: {
                        title: "Coloreamos los bloques",
                        text1: "Recorremos la lista de filas",
                        text2: "Recorremos los bloques de cada fila, y llamamos a la funciones dentro de onEachSplit para actualizar variables y posteriormente llamamos a la funcion colorWord:",
                        text3: "Esta función comprueba que no sea una palabra vacía, si es así llama a la función colorFormats",
                        text4: "Esta función es la encargada de utilizarla lista del formato que contiene las cadenas con los colores a aplicar, se recorre la lista y:",
                        text4_list: [
                            "Recorremos la lista de colores del formato, al recorrerse con la funcion every, si se devuelve positivo, seguirá con el siguiente color, si se devuelve false, se terminara la busqueda",
                            "Primero extraemos el bloque dentro de la fila que está especificado en el color:",
                            "Comprobamos que el color requiere de un carácter o búsqueda, y si es así, comprobamos que la búsqueda es contenida por el bloque",
                            "Si la palabra no fue encontrada, se continúa con la búsqueda con el siguiente color",
                            "Comprobamos que el color tiene condiciones, si es así, comprobamos que se cumple estas condiciones con las variables",
                            "Si no se cumple estas condiciones, se continúa con la búsqueda con el siguiente color",
                            "Coloreamos la palabra",
                            "Comprobamos que el color tiene variables, si es así, modificamos estas variables para que se cumplan, si el identificador empieza por exclamación, se rellenará a falso, si no, se rellenará a positivo",
                            "Si el color tiene la propiedad de continuar con la búsqueda, seguiremos con el siguiente color del formato, si no es así, pasaremos a buscar el siguiente bloque",
                        ]
                    }
                }
            }
        },
        summary: {
            title: "Conclusión",
            text1: "Esta vez me ha sido mucho más difícil e impráctico rellenar el blog, ya que implemente todo de seguido y antes crear un plan de planificación, por ello no existe un plan de implementación específico de cada parte.",
            text2: "Me hubiese gustado haber conseguido finalizar trabajos y proyectos y ser capaz de centrarme en cosas a finalizar, pero durante este tiempo he añadido más proyectos a la lista de finalizar",
            text3: "Por ahora no me planteo mejorar mis blogs, ya que todo lo que corre urgencia de mejorar se encuentra en el planteamiento y preparación, y tengo varios proyectos que debo explicar antes de poder empezar a desarrollar proyectos desde cero."
        }
    }
}

export default messages;