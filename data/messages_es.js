let messages = {
    mainPage: { 
        mainTitle: "Bienvenido.",
        mainDescription1: `Me llamo Mario y soy un programador FullStack. He desarrollado multitud de aplicaciones en diferentes entornos y frameworks. Además, poseo conocimiento en varios lenguajes.`,
        mainDescription2: `Me encanta mantenerme actualizado con nuevas tecnologías y lo desmuestro aprendiendo siempre nuevas formas, métodos y recursos para realizar proyectos de forma profesional.`,
        projects: {
            mainTitle: "Proyectos",
            mainDesc: "Lista detallada de mis proyectos favoritos.",
            list: {
                portfolio: "Porfolio React",
                portfolioDesc: "Portfolio responsivo creado con React, que contiene mis proyectos, experiencia e intereses como desarrollador."
            },
            imageAlt : "Vista previa del proyecto"
        },
        blogs: {
            mainTitle: "Publicaciones",
            mainDesc: "Lista de todos las publicaciones, actualizaciones y notas de proyecto que he desarrollado.",
            new: "¡Nuevo!",
            ago: "hace {1}",
            months: ["mes", "meses"],
            from: "fecha",
            imageAlt : "Vista previa del Post",
            viewMore : "Mostrar entero",
            back: "Volver a la lista",
            list: {
                blog1: "Mi propio blog",
                descBlog1: "Implementacion del blog dentro del portfolio, con selector de post mediante carga asincrona y sistema de traducción.",
                blog2: "Caja de código formateado",
                descBlog2: "Caja con sintaxis de código formateada en mi web, a partir de mi propio JS y con soporte de tipos",
            }
        },
        loadingBlock: {
            randomText: [
                "Cargando recursos",
                "Cargando la ventana",
                "Cargando contenido",
                "Cargando código",
                "Cargando imágenes",
                "Añadiendo errores al código",
                "Añadiendo animaciones inútiles",
                "Eliminando errores",
                "Buscando fotos de gatos",
                "Eliminando contenidos",
                "Repitiendo código",
            ],
            completed: "Completo"
        }
    },
    commons: {
        accept: 'Aceptar',
        ok: 'Ok',
        cancel: 'Cancelar',
        seeAll: 'Ver todos...',
        dateFormat: 'es-es',
        riskyUrl: {
            title: "Ten cuidado",
            desc: "Vas a navegar fuera de mi portfolio, hacia otro dominio. Siempre intento tener cuidado de las URL que publico, pero a veces los dominios cambian de dueño. No confies en nadie.",
            to: "Vas a navegar a la URL: ",
            back: "Quedarse",
            accept: "Entendido."
        },
        codeBox: {
            copyCode: "Copiar codigo al portapapeles.",
            expandCode: "Mostrar fichero completo.",
            shrinkCode: "Mostrar solo lo importante."
        },
        configuration: {
            changeColor1 : "Cambiar Color 1.",
            changeColor2 : "Cambiar Color 2.",
            lightMode: "Cambiar al modo claro.",
            darkMode: "Cambiar al modo oscuro.",
        }
    }
}
export default messages;