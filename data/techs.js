import reactIcon from '@/public/react-2.svg'
import nextJSIcon from '@/public/next-js.svg'
import tailWindIcon from '@/public/tailwindcss.svg'
import JSIcon from '@/public/logo-javascript.svg'
import GCPIcon from '@/public/google-cloud.svg'

const frontend = { name: "frontend", color: "bg-yellow-200 dark:bg-yellow-700" };
const backend = { name: "backend", color: "bg-blue-200 dark:bg-blue-700" };
const DB = { name: "DB", color: "bg-orange-200 dark:bg-orange-700" };
const cloud = { name: "cloud", color: "bg-cyan-200 dark:bg-cyan-700" };

export const techColors = [ frontend, backend, DB, cloud ];

export const javascript = {
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    img: JSIcon.src,
    name: 'Javascript',
    color: frontend.color
}
export const react = {
    url: 'https://react.dev/',
    img: reactIcon.src,
    name: 'ReactJS',
    color: frontend.color
}
export const next = {
    url: 'https://nextjs.org/',
    img: nextJSIcon.src,
    name: 'NextJS',
    color: backend.color
}
export const tailwind = {
    url: 'https://tailwindcss.com/',
    img: tailWindIcon.src,
    name: 'TailWindCSS',
    color: frontend.color
}
export const GCloud = {
    url: 'https://cloud.google.com/docs',
    img: GCPIcon.src,
    name: 'Google Cloud',
    color: cloud.color
}

export const techs = { react, next, tailwind, GCloud }