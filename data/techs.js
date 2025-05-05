import reactIcon from '@/public/react-2.svg'
import nextJSIcon from '@/public/next-js.svg'
import tailWindIcon from '@/public/tailwindcss.svg'
import JSIcon from '@/public/logo-javascript.svg'
import GCPIcon from '@/public/google-cloud.svg'

const colors = {
    frontend: "bg-yellow-200 dark:bg-yellow-700",
    backend: "bg-blue-200 dark:bg-blue-700",
    SQL: "bg-brown-200 dark:bg-brown-700",
    cloud: "bg-cyan-200 dark:bg-cyan-700"
}
export const javascript = {
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    img: JSIcon.src,
    name: 'Javascript',
    color: colors.frontend
}
export const react = {
    url: 'https://react.dev/',
    img: reactIcon.src,
    name: 'ReactJS',
    color: colors.frontend
}
export const next = {
    url: 'https://nextjs.org/',
    img: nextJSIcon.src,
    name: 'NextJS',
    color: colors.backend
}
export const tailwind = {
    url: 'https://tailwindcss.com/',
    img: tailWindIcon.src,
    name: 'TailWindCSS',
    color: colors.frontend
}
export const GCloud = {
    url: 'https://cloud.google.com/docs',
    img: GCPIcon.src,
    name: 'Google Cloud',
    color: colors.cloud
}

export const techs = { react, next, tailwind, GCloud }