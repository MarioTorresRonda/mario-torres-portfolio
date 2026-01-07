let messages = {
    codeBox: { 
        title: "CodeBox.",
        subtitle: "Created a box where it shows formatted code and correct syntax.",
        reason: {
            title: "Reason",
            text: "Inside the blog I need to show the code as an example of how I implemented something",
        },
        where: {
            title: "Where",
            text: "It will be a component inside portfolio project",
        },
        ideas: {
            title: "Ideas",
            text: "My main inspiration was the VSCode",
            imgTitle: "Visual Studio Code",
            imgText: "Screenshot of an Visual Studio workspace"
        },
        design: {
            title: "Design",
            text: "It will me made from a box with two stages",
            minimized: {
                title: "Minimized",
                text: "It will show a box with crop code, limited by the lines that are going to be showed and a button to Maximized the box"
            },
            maximized: {
                title: "Maximized/Default",
                text: "It will show the same box but this time with bigger height, divided in two blocks, first being the navbar with the files that was used in the project, and the other, the whole code of the selected navbar object",
            },
        },
        implementation: {
            title: "Implementation Plan",
            text: "It will be separated in various components",
            text2: "Mainly in the Navbar, the text box and the buttons.",
            navbar: {
                text: "The navbar will be a copy similar of:",
                foot: "Highlighting the item opened."
            },
            codebox: {
                text: "The text box will be a copy similar to:",
                foot: "Showing to the left the numbers of the row they are displayed, and the text formatted with the color of the format that is deigned (JSX, JS, HTML)",
            },
            buttons : {
                text: "The buttons will be floating in a corner of the text box, and it will alow us to:",
                button1: "Maximized the box, showing the whole file, and showing in the navbar all files related.",
                button2: "Copy the code that is shown, this will related to the text is displayed (maximized or minimized)", 
            }
        },
        work: {
            title: "Work",
            subtitle: "Here I will explain all the step that are taken to complete the defined in the plan.",
            implementation : {
                title: "Implementation",
                text: "We create a component similar to other blog components, in this case, the component will be passed a list of files",
                fileList: {
                    title: "List of files",
                    text: "The structure of the object inside the list, is the name of the minimized file, and the route from the root path, that will open the text inside (We try to make copies of the files, inside the data folder, so future changes don't affect the text display in each blog), this list will contain especial information, like default file selected, etc...",
                    example: "Like:"
                },
                formats: {
                    title: "Formats",
                    text: "The structure of this file will be an object, this object contains:",
                    list: [
                        "An objects list, each object containing: a hexadecimal color, a regExp search, a condition to enable, and a variable that would be switched",
                        "A string list, that contains the identifier of the variables that are used, this list will be used to reset the values.",
                        "An object list, each object containing: an identifier of a variable and a function; this variable will be set by the value returned by the function, this function will be call as start of the formatting",
                        "AN object list, each object containing: an identifier of a variable, and a function, this variable will be set by the value returned by the function, this function will be call for each block",
                    ],
                },
                codeBox: {
                    title: "CodeBox",
                    text: "The codebox will be a fragment used to: display the navbar with the object list files names; the selected file, will display a formatted text of the files contents inside the route; and the buttons, containing the functions of the buttons explained before.",
                    navbar: {
                        title: "NavBar",
                        text: "This fragment shows a horizontal list with the files inside the files list explained before",
                        foot: "If the minimized variable of the main fragment is true, only shows the file with the select property as true.",
                    },
                    body: {
                        title: "Body",
                        text1: "Once the file is passed to the fragment of the blog Codebox, it will ask to an api for the file, and will show it by a fragment, to control they way it displayed:",
                        text2: "to be formatted or show colors like any modern IDE, before it will be formatted:",
                    },
                    buttons: {
                        title: "Buttons",
                        text: "Is the one that show the two buttons in the right top corner, being this buttons the ones used to copy the shown text and switch the minimized variable:"
                    }
                },
                apiCall: {
                    title: "API call",
                    text1: "We create a route inside the path api/files/route.js",
                    text2: "this accepts a body with the property called route, being this a path from the project root, it reads the file inside that route ",
                    text3: "So it's not exploited the vulnerability and can read every file in the disk, it will only accept read files inside the data folder",
                },
                fileContext: {
                    title: "File Context",
                    text1: "The project will contain a context, in this content, the files with and without format will be saved:",
                    text2: "The functions are:",
                    footer2_1: "This function will return the text of the file if is already on the list codeBoxState.loadedFiles, if not, will call the API that return the text of the file, and the response it will saved inside the list codeBoxState.loadedFiles",
                    footer2_2: "This function will return the formatted text of the file if is already on the list codeBoxState.formattedFiles, if not, will call the function that return the formatted text of the file, and the response it will saved inside the list codeBoxState.formattedFiles",
                    footer2_3: "This functions will delete all the respective list that were described before, codeBoxState.loadedFiles and codeBoxState.formattedFiles."
                },
                formatTextFunction: {
                    title: "Text Formatting Function",
                    text: "This function is used to convert the text of the file to an string with format, first it split the string in substrings of \"important\" blocks, and then split the list of substring with escape characters so split between rows: ",
                    blockSplit: {
                        title: "Splits by blocks",
                        text1: "To separate the text in important blocks, we use a generic list of characters",
                        text2: "Inside of the function, we search the file that we obtain with the api; with an index, so it can skip characters, and once it checks that the characters is not skipped, we obtain the value of the string of the list: ",
                        text3: "If the format have the property slashComment to true, it would be a comment that is created with \"/\", it checks if is not inside a string of text",
                        text4: "If the character the index is it, is an \"/\", it searches if the next character is \"/\" or \"o\" so it actives a variable about being inside of a comment  ",
                        text5: "Before this fragment of code, if it already founds inside of a simple comment, it skips to the escape character, where the comment ends, and it add to the final substring list, an substring from the start of the comment to the end of it.",
                        text6: "It does the same with the multiple rows comment, but when it founds a \"*/\".",
                        text7: "After the comment checks, it look if it is inside of a string of text:",
                        foot7_1: "The first part is used to ignore everything inside until it ends in the same character that starts the string of text.",
                        foot7_2: "The second part, it searches that the letter is the same that one that start a string of text, if it is, it save the variable so it can check the first part.",
                        text8: "The last part of the function, it checks if there is any \"important \" character and if it is, it make a new block of text from the last block to this character."
                    },
                    escapeSplit: {
                        title: "Splits by escapes",
                        text1: "Once it is separated by blocks, it separated once more with escape characters (end of lines), in this case the process is a lot more straight",
                    },
                    resetVars: {
                        title: "Resets format variables",
                        text: "The formats have the ability to check if is inside of a type of character, for example \"<\" for HTML, every time it starts to formatting, first, it resets every variable of this kind",
                    },
                    formatInit: {
                        title: "Initializing the format",
                        text: "It will run at the same time all the functions that are needed to call at the start of the formatting process, for example, checks which blocks are inside of a HTML tag:",
                    },
                    blockColoring: {
                        title: "Coloring the blocks",
                        text1: "it looks up the list of rows",
                        text2: "it looks up the list of block of each row, and call all function inside onEachSplit to update variables and after it, call another function named colorWord:",
                        text3: "This function checks if the block is not a empty string, after this, call the function colorFormats",
                        text4: "The function uses the format list that contains the search string with the color to apply, the list is lookup and:",
                        text4_list: [
                            "it looks up the list of colors of the format, with the function \"evey\", if is returned true, will keep looking with the next color, if it returned a false value, it will end the search",
                            "First it extract the block inside the row with the specify color:",
                            "Then checks if the color needed a character o search, and if it is, check if the search is inside the block ",
                            "If the word did not had the search, it keep the search with the next color",
                            "It checks if the color has conditions, and if it is, check if the conditions are true with the global variables ",
                            "If the conditions aren't meet, keep the search with the next color",
                            "It color the word",
                            "It check if the word has a variable, if it is, it switch the variable with the value is indicated, if the identifier start with an exclamation, it will be switch to false, if not, it will be switch to true",
                            "If the color has a property to keep with the search, it will continue with the next color of the format, if not, it will continue with the next block",
                        ]
                    }
                }
            }
        },
        summary: {
            title: "Summary",
            text1: "This time it was hard and impractical to write tbe blog, because I did implemented everything in just 1 week and before a plan was made, so thats why there is not a implementation plan for every part.",
            text2: "I would liked to have ended work and projects and to being able to focus in ann specific thing to finish, but along this time, I hade added more projects to the list of ending projects.  ",
            text3: "For now, I don't want to better my blogs, because everything i want to become better is in the planning and preparing of the blogs and projects, I also have many projects yet to explain before I start developing other project from zero. "
        }
    }
}

export default messages;