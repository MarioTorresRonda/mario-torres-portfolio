let messages = {
    Future0PM: { 
        title: "Future 0: Puzzles Y Recompensa.",
        subtitle: "Nuevo sistema de puzzle y de recompensa en el juego Future 0 desarrollado por Mirai Vision",
        image: "Un movil con imagenes que muestran diferentes fragmentos de una historia ",
        reason: {
            title: "Razón",
            text1: "Me lo pide yul :P",
            text2: "Para mejorar la jugabilidad, dar la capacidad al jugador de elegir y ser capaz de resolver un puzzle (preguntas)",
        },
        where: {
            title: "Donde",
            text: "Será un sistema general de monedas (puntos de los puzzles) y una opción dentro del flowchart para crear el puzzle (pregunta)",
        },
        ideas: {
            title: "Ideas",
            text: "El sistema de preguntas es algo demasiado común, no está inspirado en ningún juego en concreto.",
            imgText: "Profesor Layton para el sistema de puntos (picarats)"
        },
        design: {
            title: "Diseño",
            text: "Estará formado por dos sistemas:",
            puzzle: {
                title: "Puzzle (pregunta)",
                text: "Dentro del flowchart se creará un comando, que inicie la función para hacer el puzzle, esta función realizará dos pasos:",
                steps: [
                    "Mostrar la pregunta dentro del diálogo especial o un diálogo flotante",
                    "Mostrar una ventana especial del móvil, donde se muestran los fragmentos que se tienen,  al pulsar un fragmento, este debe comunicárselo al flowchart para comprobar que es correcto"
                ],
                subText1: "Si es correcto, se muestra un diálogo de éxito, y se pasa al siguiente comando",
                subText2: "Si no es correcto, se muestra un diálogo de fallo, y se continua en el comando, mostrando las demás opciones y la seleccionada erróneamente, desactivada."
            },
            moneySystem: {
                title: "Sistema de monedas",
                text: "Será un sistema con instancia estática para poder ser accedida desde todos los sitios, se encontrara dentro del prefab Managers para que se instance en todas las escenas, contará con estos campos:",
                prop1: "con un diccionario:",
                prop1desc1: "Clave:  cadena, que será el identificador único de ese puzzle/gasto",
                prop1desc2: "Valor: entero, que será la cantidad que suma o resta",
                prop2: "un valor total, que se calculará al modificar al diccionario, sumando todos los valores de este mismo.",
                method: "y contendrá estas funciones:",
                method1: "Iniciar valor: utilizará el motor de guardado para cargar los campos de este objeto.",
                method2: "Guardar: utilizará el motor de guardado para guardar los campos de este objeto.",
                method3: "Sumar valor: Añadirá al diccionario el id del puzzle resuelto.",
                method4: "Gastar valor: primero comprobará que una vez restado el coste, el valor total es positivo, y si es así, añadirá al diccionario el id del gasto.",
            },
        },
        work: {
            title: "Trabajo",
            text: "Aquí explicaré todos los pasos del trabajo necesarios para completar lo descrito en el diseño.",
            comand: {
                title: "Comando",
                text1: "El framework de fungus tiene ya creados clases especiales para añadir como comandos dentro del flowchart, creamos un comando que inicie la secuencia del puzzle, este recibirá una lista de fragmentos a mostrar, el fragmento que se debe elegir y un identificador de la prueba de puzzle que es",
                text2: "Una vez se acceda al comando, este iniciará el sistema que mantendrá bloqueado para progresar a la siguiente acción." 
            },
            puzzleSystem: {
                title: "Sistema del puzzle",
                text1: "Este sistema se encargará de mostrar el móvil con la lista de fragmentos pasada, y esperar a que el usuario elija una opción mediante una ventana en el movil, validará si es correcto o no, y permitirá seguir o volver a mostrar el móvil.",
                text2: "Si fuese correcta la respuesta, este sistema se desactivar hasta que un comando lo vuelva a iniciar, y sumará los puntos al sistema de puntos"
            },
            FragmentViewWindow: {
                title: "Ventana Elegir Fragmento",
                text1: "Se muestra al iniciar el puzzle y es una ventana que mostra la lista de fragmentos, estos fragmentos se comunican con el Sistema de puzzle pasándole su identificador al ser pulsados.",
                text2: "Si el fragmento no fuese el que se está buscando, entonces se desactiva.",
            },
            pointSystem: {
                title: "Sistema de puntos",
                text1: "Tiene la interface del sistema de guardado, para poder modificar la partida guardada, guardando en una lista el identificador del puzle/gasto y el valor de este mismo.",
                text2: "La lista se sacará del diccionario que tiene este sistema, para ello se crearán dos métodos para formatear y parsear.",
                text3: "También los métodos para modificar la lista.",
                text4: "Y un método para comprobar si puede asumir el gasto.",
            },
        },
        summary: {
            title: "Conclusión",
            text1: "Esta implementación me la pidió Yul hace unos meses y no la he completado hasta ahora, pero me ha costado menos que otras veces, ha sido algo más directo.",
            text2: "Así mismo creo que estoy mejorando con la idea de centrarme en terminar una cosa en particular, pero me cuesta mucho no ser impulsivo a la hora de ponerme a programar y pierdo más tiempo de lo debido en poner un rumbo a las cosas y no irme por las nubes.",
            text3: "Tengo que hablar con Yul de mejorar la interfaz (GUI) del juego ya que es la parte más débil del mismo.",
        }
    },
}

export default messages;