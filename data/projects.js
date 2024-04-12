import react from '@/public/react-2.svg'
import portfolioImage from '@/assets/portfolio.png';

export const projectList = [
    { 
        id: 1,
        name: ["portfolio"],
        url: "https://github.com/MarioTorresRonda/mario-torres-portfolio",
        tech: [ 'react', 'next', 'tailwind', 'firebase' ],
        description: ["portfolioDesc"],
        image: portfolioImage
    }
];

export const techs = {
    react : {
        url: 'https://react.dev/',
        img: react.src,
        name: 'ReactJS'
    }
}