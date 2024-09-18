let messages = {
    Blog: { 
        title: "Blog on portfolio.",
        subtitle: "I wanted to make a blog portfolio to add the things I had done, 100% own code with only JS and React.",
        image: "desk with multiple things, a laptop, multiple book and plants.",
        "chapter 1": "Work Plan.",
        "chapter 1 desc": "To make an idea work and be developed, is necessary to enumerate the reasons, the direction of the workload, the expectance, the idea, after having all of that, we can start the project, this is important, if not, we can find ourself on developed loops or loss the direction of what we want to develop.",
        "chapter 2": {
            title: "Reason.",
            desc:  "I usually develop things but never finish them, algo I never maintain, making me loss that knowledge. So I want to explain in a blog: ",
            list: [
                "How do I develop my ideas.",
                "How do I start building.",
                "If I finish them, how did I finish them.", 
            ]
        },
        "chapter 3": {
            title: "Where.",
            desc:  "3 months ago I made an portfolio, it's pretty empty, because of my obsession to not storing the work I do, I'd like to start filling it, but I don't have any complete developed project, so I'm starting to explain my projects bits by bits in the blog."
        },
        "chapter 4": {
            title: "Ideas.",
            desc:  "Here is a bunch of ideas that had inspire me:",
            idea1: "Sean Halpin",
            idea1Desc: "I like the notes menu he have, is simple, but direct and really pretty.",
            idea2: "Medium.com",
            idea2Desc: "Medium blogs are a statement, a lot of infographics, with images, code, text, make everything really easy to read.",
            idea3: "upstatement.com",
            idea3Desc: "I always wanted a Code systax highlight in my portfolio as upstatements have.",
            idea4: "Brittany Chiang",
            idea4Desc: "My first inspiration to do a portfolio was this girl, I really like her work.",
        },
        "chapter 5": {
            title: "Design.",
            desc:  "It's going to be divided in three different fragments:",
            fragment1: {
                title: "Navbar fragment.",
                desc:  "the fragment will be located after Project nav",
                desc2: "When we click on the nav, we will be redirect to the url /blogs, like the others navs "
            },
            fragment2: {
                title: "Mainpage fragment.",
                desc:  "It will be found after the list of projects in the main page. It's gonna be made of two blocks:",
                part1: {
                    title: "Image Block.",
                    desc:  "It will show an Image of the blog that is selected in the second block, also containing the date the blog was upload, the image will contain a link to the blog.",
                },
                part2: {
                    title: "List Block.",
                    desc:  "It will be a frame, with first, two buttons on the sides to navigate between the blogs, and in the middle, the list containing three blogs.",
                    desc2: "It one of the row is clicked, the image, date and link in the first block will change, and with double click, will directly navigate to the blog.  ."
                }
            }
        },
    }
}

export default messages;