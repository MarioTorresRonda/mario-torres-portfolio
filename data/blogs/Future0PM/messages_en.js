let messages = {
    Future0PM: { 
        title: "Future 0: Puzzles & Rewards.",
        subtitle: "New Puzzle & Rewards circuit in the game Future 0 developed by Mirai Vision.",
        image: "A phone with images that show different fragments of an history ",
        reason: {
            title: "Reason",
            text1: "Yul asked for it :P",
            text2: "To improve the game loop, and give the player the option to choose and be able to resolve the puzzles (Questions)",
        },
        where: {
            title: "Where",
            text: "It will be a coins system ( points of the puzzles) and an option inside fungus flawchart to start a puzzle (question)",
        },
        ideas: {
            title: "Ideas",
            idea1: "The question circuit is something really common, is not inspired in any game specially",
            idea2: "Professor Layton for the points circuit (picarats)",
        },
        design: {
            title: "Design",
            text: "It will be made in two circuits:",
            puzzle: {
                title: "Puzzle (question)",
                text: "Inside of the flowchart a command will be created, that start a function that made the puzzle, this function will be separated in two steps:",
                steps: [
                    "Shown the question inside the especial dialog or floating dialog.",
                    "Shown a especial window inside the phone, where the fragments will be shown, when a fragment is click, is passed to the flowchart, to check if is right"
                ],
                subText1: "If is right, a success dialog is shown, and continues to the next command",
                subText2: "If is not right, a fail dialog is shown, and the other options are shown, anwith the selected before disabled.",
            },
            moneySystem: {
                title: "Money circuit",
                text: "It will be a system static instanced, so it can be accessed in any place, it will be stored inside the Managers prefab, so is instanced in every Scene and it will have this props:",
                prop1: "a dictionary:",
                prop1desc1: "Key: string that contains the unique identification of the puzzle/expense",
                prop1desc2: "Value: int that contains the quantity of the sum or sub",
                prop2: "a total value, that is calculated every time the dictionary is changed, adding all the values of the elements.",
                method: "and this methods:",
                methods: [
                    "Start value: will use the save manager, to load the props inside the save to this system.",
                    "Save: will use the save manager, to save the props of this system inside the save.",
                    "Add value: add to the dictionary the id and valuer of the finished question.",
                    "Subtract value: First, check if the value without the cost is positive, if it is, then, add to the dictionary with the id and expense",
                ]
            },
        },
        work: {
            title: "Work",
            text: "Here I will explain all the step of the work were needed to finish the design plan,.",
            comand: {
                title: "Command",
                text1: "Fungus framework have already especial class to  add command inside the flowchart, I created a command that start the puzzle behaviour, this command receives a list of fragment to shown, the fragment to be chosen, and a identification  of the puzzle we are ",
                text2: "Once the command is accessed, this start the system that will lock the player to progress to the next action/command",
            },
            puzzleSystem: {
                title: "Puzzle system",
                text1: "This system will be the one displaying inside the phone, the list given in the command, and wait the user to choose an option inside the window in the phone, validating if is correct or not, and then continuing or showing the phone again..",
                text2: "If is right, this system will be turn off until a command starts again, before that, it will add the points to the system points.",
            },
            FragmentViewWindow: {
                title: "Window to Choose Fragment.",
                text1: "it is shown when the puzzle is started, and its a window that shows a list of fragment, were this fragments are connected with the Puzzle system passing their id when they are clicked.",
                text2: "If the fragment is not the one is right, then is disabled.",
            },
            pointSystem: {
                title: "Points system",
                text1: "It have the interface of the save manager, so it can modified the saved game .",
                text2: "The list its obtain from the dictionary that have this system, also containing the methods for formatting and parsing the list. ",
                text3: "Also the method to edit the list.",
                text4: "And a method to check if the expense can be bought.",
            },
        },
        summary: {
            title: "Summary",
            text1: "This implementation was asked from Yul months ago and haven't finish it until now, but it was easier than other times, and more straight forward.",
            text2: "Also im improving with the idea of centering in finishing a single thing before starting another, but it is hard not to be impulsive at programming at first and losing more time that was planned before pathing the things and not ending in the clouds.",
            text3: "I have to talk with Yul about upgrading tre interface (GUI) of the game, I think is the weakest part of the game.",
        }
    }
}

export default messages;