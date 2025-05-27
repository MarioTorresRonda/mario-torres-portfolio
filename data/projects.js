import portfolioImage from '@/public/portfolio.png';
import factorKubataImage from '@/public/factorKubata.png';
import {react, next, tailwind, GCloud, javascript } from './techs';

export const projectList = [
    { 
        id: 1,
        name: ["portfolio"],
        url: "https://portfolio.mariotorrres.com",
        github: "https://github.com/MarioTorresRonda/mario-torres-portfolio",
        tech: [ react, javascript, tailwind, next, GCloud ],
        description: ["portfolioDesc"],
        image: portfolioImage
    },
    { 
        id: 2,
        name: ["factorKubata"],
        url: "https://factorKubata.mariotorrres.com",
        github: "https://github.com/MarioTorresRonda/FactorKubata",
        tech: [ react, javascript, tailwind, next, GCloud ],
        description: ["factorKubataDesc"],
        image: factorKubataImage
    }
];

