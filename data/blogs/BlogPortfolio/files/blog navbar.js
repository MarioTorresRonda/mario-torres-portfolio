// Copy of navBar.js at 30/12/2024
import { bloglist } from "@/data/blogs.js";

const home = {
    title:["mainPage", "mainTitle"],
    num:"01",
    url:"/",
    symbol: "#",
    oldBlog : bloglist[0],
    blog: blogList[0],
    page: 0
}

const projects = {
    title:["mainPage", "projects", "mainTitle"],
    num:"02",
    url:"/projects",
    symbol: "/"
}

const blog = {
    title:["mainPage", "blogs", "mainTitle"],
    num:"03",
    url:"/blogs",
    symbol: "&"
}

const navVarList = { home, projects, blog }

export { blog, projects, home }
export default navVarList;