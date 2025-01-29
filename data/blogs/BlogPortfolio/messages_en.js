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
                    desc2: "If one of the row is clicked, the image, date and link in the first block will change, and with double click, will directly navigate to the blog.  ."
                }
            },
            fragment3: {
                title: "Main fragment.",
                desc:  "It will be divided in two states:",
                part1: {
                    title: "Not selected post.",
                    desc:  "It will be made of a main list with an infinite scroll with every post shown in a format like:",
                    list: [
                        "Simple image, with rounded borders.",
                        "Title of the post.",
                        "Subtitle of the post.", 
                        "How long have been since the post had been made, if it have less than 1 month, it will be \"new\".", 
                    ]
                },
                part2: {
                    title: "With selected post.",
                    desc:  "It will be made of multiple parts, a sum of: ",
                    list: [
                        "Auxiliary navBar with the title and chapters of the post.",
                        "Title of the post.",
                        "Subtitle of the post.", 
                        "Multiple chapters, with then, also being able to have multiple chapters too.", 
                        "Images, with different distributions and effects, like zoom, collage or carrousel.", 
                        "Text blocks / Code blocks, with them having the option to copy the text quickly.", 
                        "Text with links, with a warning before navigating to other website.", 
                        "General text, with custom size, color and effects.", 
                    ]
                },
            },
        },
        "chapter 6": {
            title: "Development Plan",
            desc: "Same as done with the projects, I'll create a file with a list of blogs, were every blog will be in a JSON format.",
            desc2: "With the list on blogs, the mainpage Fragment will be made, every blog filling his title, subtitle, date and an Image in the blog description of the file.",
            desc3: "The file field will redirect to an JSX archive that will be load asynchronously, having a similar structure of: ",
            desc4: "To utilize the localization already implemented, all the text inside the blog will be codes  of the localization file.",
            desc5: "This codes will only be present on the localization file only if the blog is loaded, to save load time and memory used.",
        },
        "chapter 7": {
            title: "Work",
            desc: "Here i will explain all the steps of work needed to complete the wrote on the Plan.",
            part1: {
                title: "Implementation",
                fragment1: {
                    title: "Navbar fragment.",
                    desc: "I added the blog nav to the already created navbar system, adding to the JSON config file an object with the Blog information",
                    desc2: "Every object is the JSON is made of a Localization code, a number, a symbol and an url.",
                    desc3: "Once saved the file and reload the page, it will be display on the new navbar. "
                },
                fragment2: {
                    title: "Mainpage Fragment",
                    desc: "We use the already existing styles to create a similar design as in the projects:.",
                    explication1: "the fragment <ContentBox>, is used to make the width and height of the box responsive.",
                    explication2: "the pair of <div> divide the box in two halves, one for <BlogResumeList> and the other halve of the space one for <BlogResumeItemImage />.",
                    fragment1: {
                        title: "BlogResumeList:",
                        desc: "The fragment is going to show 3 <BlogResumeItem> fragments , and arrows on the sides to switch betweens pages.",
                        explanation1: "Going to show the first 3 blogs of the blog List.",
                        explanation2: "Import the list to the fragment",
                        explanation3: "To only show the first 3 blogs, it uses a variable named “page”, which will also let us also navigate.",
                        explanation4: "And the variable will be used to show the blog list:",
                        pages: {
                            title: "Page system",
                            explanation: "To be able to navigate, it will be necessary the buttons on the sides, making the buttons change the page variable"
                        },
                        blogResumeItem: {
                            title: "BlogResumeItem",
                            explanation: "This fragment will be created for each element in the page, showing the title, and description of each blog, letting the user open the blog."
                        }
                    },
                    fragment2: {
                        title: "BlogResumeItemImage:",
                        desc: "Will display the date and the mainImage of the blog that is selected",
                    },
                },
                fragment3: {
                    title: "Main fragment.",
                    desc: "We will use the pages router of nextJS to divide the implementation into pages.",
                    unselectedBlog : {
                        title: "Unselected Blog",
                        desc: "If it is not a selected blog, it will display a list to select one blog.",
                        descList: "The list will stay on window margins, and be displayed in vertical direction.",
                        descElement: "Being the list, elements made of the title, the description, the age and an image of the blog.",
                    },
                    selectedBlog : {
                        title: "Selected Blog",
                        desc: "If a blog is selected (via url), it will display the blog loaded asynchronously, also letting the user deselect the selected blog.",
                        asynchronousLoad: {
                            title: "Asynchronous Load",
                            step1: "Calling an async method that will load the blog and save on state",
                            step2: "The async method will use the id of the blog to import the Blog.jsx inside the route of the id",
                            step3: "But before this import, it will load the locales of the blog, using the locale context:",
                            step4: "being getAsyncBlogLocale, another import of an json file with all the texts"
                        },
                        processBlog: {
                            title: "Process the Blog",
                            step1: "Once the blog is loaded, it is gonna be processed, reading the react element and doing changes for each element.",
                            list: [
                                "If it is title, or chapter, we are gonna add a key, to anchor to the element on searches, and a level to show how many chapter are child of",
                                "If the element have children,  we are going to do the same operation described before, but in the children"
                            ]
                        },
                        processNavBar: {
                            title: "Process the NavBar",
                            desc: "Once we have processed the blog, we will load the blog along with its associated navbar. The processing of the navbar will be similar to that of the blog.",
                            list: [
                                "We will read if the element have content to display on the navbar",
                                "Keep in mind that only the fragments within the blog that are chapters and titles will have an ID. <br> ",
                                "For each of these, we will add a NavBarItem object to a list.",
                                "This object will use the element's name, ID, and level.",
                                "If the element have children,  we are going to do the same operation described before, but in the children",
                                "The list will be rendered once this process is complete.",
                            ]
                        }
                    }
                }
            }
        }
    }
}

export default messages;